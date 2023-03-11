import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
import Layout from "../../components/Layout";
import MainLayout from '../../components/MainLayout';

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  // const [category,setcategory]= useState("")
  const [ratings, setRatings] = useState("");
  const [reviews, setReviews] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/product/get-product/${params.slug}`
      );
      setCategory(data.product.category._id);
      setId(data.product._id);
      setTitle(data.product.title);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setTitle(data.product.title);
      setStock(data.product.stock);
      setReviews(data.product.reviews);
      setRatings(data.product.ratings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/category/get-all-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong getting the category");
    }
  };

  useEffect(() => {
    getAllCategory();
    //eslint-disable-next-line
  }, []);

  //craete product hadneling

  const handelUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("title", title);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("stock", stock);
      image && productData.append("image", image);
      productData.append("category", category);
      const { data } = axios.put(
        `/api/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
        navigate("/admin/dashboard/products");
      } else {
        toast.success("Product Updated succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to delete?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/product/delete-product/${id}`);
      toast.success("Product deleted successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <MainLayout />
          </div>
          <div className="col-md-9">
            <div className="container-fluid">
              <h1>Update Products</h1>
              <div className="m-1 w-75">
                <Select
                  bordered={false}
                  placeholder="Select a category"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  {categories?.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </Select>
                <div className="mb-3 fileUpload">
                  <label className="btn btn-outline-secondary col-md-12">
                    {image ? image.name : "Upload image"}
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3">
                  {image ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Product Image"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product/product-photo/${id}`}
                        alt="Product Image"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={title}
                    placeholder="Write a name"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="Write discription"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    value={price}
                    placeholder="Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    value={stock}
                    placeholder="Stock"
                    className="form-control"
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                {/* <div className="mb-4">
            <input
              type="text"
              value={reviews}
              placeholder="Reviews"
              className="form-control"
              onChange={(e) => setReviews(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={ratings}
              placeholder="Ratings"
              className="form-control"
              onChange={(e) => setRatings(e.target.value)}
            />
          </div> */}

                <div className="mb-3">
                  <button className="productCreate" onClick={handelUpdate}>
                    Update Product
                  </button>
                  <button className="productCreate" onClick={handelDelete}>
                    Delete Product
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UpdateProduct