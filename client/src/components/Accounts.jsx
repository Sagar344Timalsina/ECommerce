import React from 'react'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'
import Layout from './Layout'

const Accounts = () => {
  return (
    <Layout title={"Accounts Page Ecommerce"}>
        <div className='d-flex align-items-center justify-content-between'>
        <RegisterPage />
        <LoginPage/>
        </div>
    </Layout>
  )
}

export default Accounts