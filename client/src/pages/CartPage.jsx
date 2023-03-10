import React from 'react'
import Layout from "../components/Layout"
import { useCart } from '../components/context/Cart'
import "../css/cartPage.css";
import { useAuth } from '../components/context/Auth';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';




const CartPage = () => {
    const [cart, setCart] = useCart();
    const [auth]=useAuth();
    const navigate =useNavigate();

    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart]
            let index = myCart.findIndex(item => item._id === pid)
            myCart.splice(index, 1)
            setCart(myCart);
            localStorage.setItem('cart', JSON.stringify(myCart))
        } catch (error) {
            console.log(error)
        }

    }
    const handleOrdersPayment=async()=>{
        try {
            const {data}=await axios.post('/api/admin/orderPost',{cart})
            localStorage.removeItem('cart');
            setCart([])
            toast.success("Checkout done successfully");
        } catch (error) {
            console.log(error)
        }
    }

    const totalPrice = () => {
        try {
            let total = 0
            cart?.map(item => { total = total + item.price })
            return total

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <div className="main-cart-page">
                <div className="cart-header">Your Cart have {cart.length} items</div>

                {/* <div className="child-cart">
                    <div className="cart-img">Image</div>
                    <div className="cart-desc">Desc</div>
                    <div className="cart-price">Price</div>
                    <div className="cart-Quantity">Quantity</div>
                    <div className="cart-Total">Total</div>
                    <div className="cart-Remove-Button">
                        Remove
                    </div>
                </div> */}
                <div className="row mt-3">
                    <div className="col-md-8">
                        {
                            cart?.map((p) => (
                                <div className="row m-2 p-3 card flex-row">
                                    <div className="col-md-4">
                                        <img src={`/api/product/product-photo/${p._id}`} alt={p.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <h4>{p.title.substring(0, 45)}</h4>
                                        <p>{p.description.substring(0, 30)}</p>
                                        <h4>RS ::{p.price}</h4>
                                        <button className='btn btn-danger' onClick={() => removeCartItem(p._id)}>Remove</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-4">
                        <h4>Cart Summary</h4>
                        <p>Total | Checkout | Payment</p>
                        <hr />
                        <h4>Total::{totalPrice()}</h4>
                        {auth?.user?.address ? (
                            <>
                                <div className="mb-3">
                                    <h4>Current Address</h4>
                                    <h5>{auth?.user?.address}</h5>
                                    <button
                                        className="btn btn-outline-warning"
                                        onClick={() => navigate("/dashboard/user/profile")}
                                    >
                                        Update Address
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="mb-3">
                                {
                                    auth?.token ? (
                                        <button
                                            className="btn btn-outline-warning"
                                            onClick={() => navigate("/dashboard/user/profile")}
                                        >Update Address</button>
                                    ) : (
                                        <button  className="btn btn-outline-warning"
                                        onClick={() => navigate("/accounts")}>Please login to checkout</button>
                                    )
                                }
                            </div>
                           
                        )
                        
                        
                        
                        
                        }
                        <div className="mt-2">
                            {
                               auth?.user?.address ?(
                                <button className='btn btn-primary' onClick={handleOrdersPayment}>Checkout</button>
                               ) :("")
                            }
                                
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage