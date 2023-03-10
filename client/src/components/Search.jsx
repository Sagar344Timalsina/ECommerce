import React from 'react'
import Layout from "../components/Layout"
import { useSearch } from './context/Search'
import {  useNavigate } from 'react-router-dom'
import "../css/AllProducts.css"

const Search = () => {
    const [values,setValues]=useSearch();
    const navigate=useNavigate();
  return (
    <Layout>
        <div className="container">
            <div className="text-center">
                <h1>Search Result</h1>
                <h6>
                    {values?.results.length<1?"No products Found":`Found ${values?.results.length} Results`}
                </h6>
                <div className="right-all-product">
                        <span>Products</span>
                        <div className="display-product">
                            {
                                values?.results.map(((prod) => (
                                    <div className='card-product' key={prod.id} onClick={() => navigate(`/product/${prod.slug}`)} >
                                        <img src={`/api/product/product-photo/${prod._id}`} alt={prod.title} />
                                        <div>{prod.title}</div>
                                        <div style={{ fontWeight: "600" }}>RS {prod.price}</div>
                                    </div>
                                )))
                            }
                        </div>
                    </div>
            </div>
        </div>
    </Layout>
  )
}

export default Search