import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'
import axios from 'axios'
import { useAuth } from '../../components/context/Auth'
import moment from "moment"

const Orders = () => {
    const [auth] = useAuth();
    const [orders, setOrders] = useState([]);


    const getOrders = async () => {
        try {
            const { data } = await axios.get('/api/admin/orders');
            setOrders(data)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (auth?.token) getOrders();
        //eslint-disable-next-line
    }, [auth?.token])

    return (
        <Layout title={"Orders-ecommerce"}>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1> All Orders</h1>
                        {/* {
                            JSON.stringify(orders, null, 4)
                        } */}

                        <div className='border shadow'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Status</th>
                                        {/* <th scope="col">Buyer</th> */}
                                        <th scope="col"> date</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        orders?.map((o, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{o.status}</td>
                                                <td>{moment(o.createdAt).fromNow()}</td>
                                                <td>{o.payment}</td>
                                                <td>{o.products?.length}</td>
                                                {/* <td>{o.buyer.name}</td> */}
                                            </tr>
                                        ))
                                    }



                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Orders