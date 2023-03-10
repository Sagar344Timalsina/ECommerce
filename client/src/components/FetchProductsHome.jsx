import React, { useEffect, useState } from 'react'
import '../css/HomePageProducts.css'
import { Link } from 'react-router-dom';

const FetchProductsHome = () => {
    const [products, setProducts] = useState([]);
    const [img, setImg] = useState([]);
    const [pages, setPages] = useState(1);
    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/product/get-all-product");
            const data = await res.json();
            // const dataimg=await resphoto.json();
            // console.log(data);
            // console.log(resphoto);

            if (data && data.products) {
                setProducts(data.products);
            }
        } 
        catch (err) {
            console.log(err);   
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length % 10 && selectedPage !== pages) {
            setPages(selectedPage);
        }
    }


    return (
        <>
            <div>
                {
                    products.length > 0 && (
                        <div className='products'>
                            {
                                products.slice(pages * 10 - 10, pages * 10).map((prod) => {
                                    //BEM CSS Convention
                                    // <Link key={prod.id} to={`/dashboard/admin/product/${prod.slug}`}>
                                   return <div className='products__single' key={prod.id} >
                                        {/* <Link to={`/dashboard/admin/product/${prod.slug}`}> */}
                                        <img src={`/api/product/product-photo/${prod._id}`} alt={prod.title} />
                                        <span>{prod.title}</span>
                                        {/* </Link> */}
                                    </div>
                                    
                                    
                                    // </Link>

                                    // return <span className='products__single' key={prod.id}>
                                    //     <img src={`/api/product/product-photo/${prod._id}`} alt={prod.title} />
                                    //     <span>{prod.title}</span>
                                    // </span>
                                })
                            }
                        </div>
                    )
                }
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
        </>
    )
}

export default FetchProductsHome