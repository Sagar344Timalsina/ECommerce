// import React from "react";
// import { NavLink } from "react-router-dom";
// const UserMenu = () => {
//   return (
//     <div>
//       <div className="text-center dashboard-menu">
//         <div className="list-group">
//           <h4>Dashboard</h4>
//           <NavLink
//             to="/dashboard/User/profile"
//             className="list-group-item list-group-item-action"
//           >
//             Profile
//           </NavLink>
//           <NavLink
//             to="/dashboard/User/orders"
//             className="list-group-item list-group-item-action"
//           >
//             Orders
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserMenu;




import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { MdDashboard, MdShoppingCart, MdCategory } from "react-icons/md";
// import {FaUsers} from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
// import {GiHamburgerMenu} from "react-icons/gi";
import { Outlet } from 'react-router-dom';
import { Layout as divlayout } from "../components/Layout"
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const UserMenu = () => {
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
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              naviagte(key);
            }
          }}
          items={[
            {
              key: '/dashboard/User',
              icon: <MdDashboard className='fs-4' />,
              label: 'Dashboard ',
            },

            {
              key: '/dashboard/User/profile',
              icon: <MdCategory className='fs-4' />,
              label: "Profiles",
            },
            {
              key: '/dashboard/User/orders',
              icon: <FaClipboardList className='fs-4' />,
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

          <Outlet />

        </Content>
      </Layout>
    </Layout>

  );
};
export default UserMenu;