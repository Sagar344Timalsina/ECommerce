import React, { useState } from 'react'
import CarouselDiv from '../components/CarouselDiv';
import FetchProductsHome from '../components/FetchProductsHome';
import Layout from '../components/Layout';
import { useAuth } from '../components/context/Auth';
import ComputerComponents from '../components/ComputerComponents';

const HomePage = () => {
  const [auth,setAuth]=useAuth();
  return (
    <Layout>
    <CarouselDiv/>
    {/* <FetchProductsHome/> */}
    <ComputerComponents/>
    <div>

    </div>
    </Layout>
  )
}

export default HomePage;
