import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './context/Cart';
import '../css/ProductDetails.css'
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const params = useParams();
    const [cart, setCart] = useCart();
    // const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([])

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`/api/product/get-product/${params.slug}`);
            setProduct(data?.product);
            // getSimilarProduct(data?.product._id,data?.product.category._id);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug])

    // const getSimilarProduct=async(pid,cid)=>{
    //     try {
    //         const {data}=await axios.get(`/api/product/related-product/${pid}/${cid}`);
    //         setRelatedProduct(data?.products)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <Layout>
            <div className="main-container-product">
                <div className="left-image-product">
                    <img src={`/api/product/product-photo/${product._id}`} />

                </div>
                <div className="right-desc-product">
                    <div className='Product-header' style={{ fontSize: "35px" }}>Product Description</div>
                    <div className="desc-inner">
                        <div className="pro-title">Name:: {product.title}</div>
                        <div className="pro-desc">Description:: {product.description}</div>
                        {/* <div className="pro-cat">Category:: {product.category}</div> */}
                        <div className="pro-stock">Stock:: {product.stock}</div>
                        <div className="pro-price" style={{ fontSize: "22px", fontWeight: "600", color: "#34495E  " }}>Price:: RS {product.price}</div>
                    </div>
                    <div className="add-to-cart">
                        <button onClick={() => {
                            setCart([...cart, product]);
                            localStorage.setItem('cart', JSON.stringify([...cart, product]))
                            toast.success("Items added to cart successfully");
                        }}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <h1>Similar Products</h1>
                {/* {JSON.stringify(relatedProduct,null,4)} */}
            </div>
        </Layout>
    )
}

export default ProductDetails