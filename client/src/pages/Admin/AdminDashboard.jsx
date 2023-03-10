import React from 'react'
import Layout from '../../components/Layout'
import MainLayout from '../../components/MainLayout'

const AdminDashboard = () => {
    return (
        <Layout>
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <MainLayout/>
                    </div>
                    <div className="col-md-9">
                      
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default AdminDashboard