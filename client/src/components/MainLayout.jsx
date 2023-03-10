import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {MdDashboard, MdShoppingCart,MdCategory} from "react-icons/md";
// import {FaUsers} from "react-icons/fa";
import {FaClipboardList} from "react-icons/fa";
// import {GiHamburgerMenu} from "react-icons/gi";
import { Outlet } from 'react-router-dom';
import {Layout as divlayout} from "../components/Layout"
import {  Layout,Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const naviagte = useNavigate();
  return (
   
     <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
              if(key === "signout"){
              }else{
                naviagte(key);
              }
          }}
          items={[
            {
              key: '/dashboard/Admin',
              icon: <MdDashboard className='fs-4'/>,
              label: 'Dashboard ',
            },
            {
                key: '/Products',
              icon: <MdShoppingCart className='fs-4'/>,
              label: 'Products ',
              children:[
               {
                key: '/dashboard/Admin/create-product',
                icon: <MdShoppingCart className='fs-4'/>,
                label: 'Add Product ',
                },
               {
                key: 'product',
                icon: <MdShoppingCart className='fs-4'/>,
                label: 'All Product ',
                },
              ]
            },
              {
                key:'/dashboard/Admin/create-category',
                icon:<MdCategory className='fs-4'/>,
                label:"Category",
              },
            {
              key: '/dashboard/Admin/orders',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Orders ',
  
            },
          
          ]}
        />
      </Sider>
       <Layout className="site-layout">
        <Header
        className="d-flex justify-content-start ps-1 pe-5"
          style={{
            padding: 10,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        
          <Outlet/>
          
        </Content> 
      </Layout> 
    </Layout>

  );
};
export default MainLayout;