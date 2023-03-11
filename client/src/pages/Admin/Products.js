import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import MainLayout from "../../components/MainLayout";
const Products = () => {
  const [products, setProducts] = useState([]);
  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/get-all-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  //life cycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="col-md-3">
        <h1 className="text-center">All Product List</h1>
        <div className="d-flex">
          {products?.map((p) => (
            <Link
              key={p._id}
              to={`/dashboard/Admin/update-product/${p.slug}`}
              className="text-dark"
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={`/api/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.image}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
