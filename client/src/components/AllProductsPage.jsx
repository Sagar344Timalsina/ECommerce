import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "../css/AllProducts.css"
import Layout from './Layout';
import { Checkbox, Radio } from 'antd';
import { Prices } from './PriceFilter';
import { useNavigate } from 'react-router-dom';

const AllProductsPage = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [pages, setPages] = useState(1);


    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length % 10 && selectedPage !== pages) {
            setPages(selectedPage);
        }
    }


    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('/api/product/get-all-product');
            if (data && data.products) {
                setProducts(data.products);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('/api/category/get-all-category');
            if (data?.success) {
                setCategories(data?.category);
                // console.log(data.category);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllCategories();
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!checked.length || !radio.legth) getAllProducts();

    }, [checked.length, radio.legth])
    useEffect(() => {
        if (checked.length || radio.legth) filterProduct();
    }, [checked, radio])


    const filterProduct = async () => {
        try {
            const { data } = await axios.post("/api/product/product-filters/", { checked, radio })
            if (data?.success) {
                setProducts(data?.products)
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    const handleFilter = (value, id) => {
        let all = [...checked]
        if (value) {
            all.push(id)
        }
        else {
            all = all.filter(c => c !== id)
        }
        setChecked(all);
    }

    return (
        <Layout>
            <div className="main-all-products">
                <div className="header-product">
                    <span style={{ fontSize: "30px", padding: "0 1rem", borderBottomStyle: "solid" }}>All Products</span>
                    <hr />
                </div>
                <div className="content-product">
                    <div className="left-filter">
                        <span>Filters BY Category</span>
                        <ul>
                            {
                                categories?.map(cat => (
                                    <li>
                                        <Checkbox key={cat._id} onChange={(e) => handleFilter(e.target.checked, cat._id)}>
                                            <span>{cat.name}</span>
                                        </Checkbox>
                                    </li>
                                )
                                )
                            }
                        </ul>
                        {

                        }

                        <span>Filters By Price</span>
                        <ul>
                            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                {
                                    Prices?.map((price) => (
                                        <li key={price._id}>
                                            <Radio value={price.array}>{price.name}</Radio>
                                        </li>
                                    ))
                                }
                            </Radio.Group>
                        </ul>
                    </div>
                    <div className="right-all-product">
                        <span>Products</span>
                        <div className="display-product">
                            {
                                products.slice(pages * 10 - 10, pages * 10).map(((prod) => (
                                    <div className='card-product' key={prod.id} onClick={() => navigate(`/product/${prod.slug}`)} >
                                        <img src={`/api/product/product-photo/${prod._id}`} alt={prod.title} />
                                        <div>{prod.title}</div>
                                        <div style={{ fontWeight: "600" }}>RS {prod.price}</div>
                                    </div>
                                )))
                            }
                        </div>
                        {
                            products.length > 0 && (<div className='pagination'>
                                <span onClick={() => selectPageHandler(pages - 1)}>◀</span>
                                {
                                    [...Array(products.length % 10)].map((_, i) => {
                                        return <span key={i} className={pages === i + 1 ? "pagination__active" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                                    })
                                }
                                <span onClick={() => selectPageHandler(pages + 1)}>▶</span>

                            </div>)
                        }

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AllProductsPage