import React,{useEffect,useState} from 'react'
import MainLayout from './../../components/MainLayout';
import Layout from '../../components/Layout';
import { useAuth } from '../../components/context/Auth';
import axios from 'axios';
import moment from 'moment';
const AdminOrders = () => {

    //get orders
    const[order,setOrder]=useState();
    const[auth,setAuth]=useAuth();



    const getAllOrders=async()=>{
        try {
            const {data}= await axios.get(`/api/admin/orders`); 
            setOrder(data);
            console.log(order);
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
        if(auth.token)
        getAllOrders();
        //eslint-disable-next-line
    },[auth.token]);

  return (
    <Layout>

    <div className="row">
        <div className="col-md-3">
            <MainLayout/>
        </div>
        <div className="col-md-9">
        <h1>All Orders</h1>

 <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Products</th>
      <th scope="col">Date</th>
      <th scope="col">Payment</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  <tbody>
   {
    order?.map((od,index)=>(
        <tr key={index}>
            <td>
                {index+1}
            </td>
            <td>
                {od.products}
            </td>
            <td>
                {moment(od.createdAt).fromNow()}
            </td>
            <td>
                {od.payment}
            </td>
            <td>
                {od.status}
            </td>
        </tr>
    ))
   }
  </tbody>

</table>

        </div>
    </div>
    </Layout>
  )
}

export default AdminOrders