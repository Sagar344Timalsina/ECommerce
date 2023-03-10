import './App.css';
import { Routes, Route } from 'react-router-dom';

//all the components are load in this file


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import PageNotFound from './pages/PageNotFound';
// import Register from './pages/Auth/RegisterPage';
import Accounts from './components/Accounts';
import UserDashBoard from './pages/User/UserDashBoard';
import PrivateRoute from './components/Routes/PrivateRoute';
import AdminProtectedRoute from './components/Routes/AdminProtectedRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AllProductsPage from './components/AllProductsPage';
import ProductDetails from './components/ProductDetails';
import CartPage from './pages/CartPage';
import Orders from './pages/User/Orders';
import Profile from './pages/User/Profile';
import MainLayout from './components/MainLayout';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Search from './components/Search';
// import{Toaster} from 'react-hot-toast';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/search' element={<Search />} />


        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<UserDashBoard />} />
          <Route path='user/orders' element={<Orders />} />
          <Route path='user/profile' element={<Profile />} />

        </Route>

        <Route path='/dashboard' element={<AdminProtectedRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          {/* <Route path='admin' element={<MainLayout />} /> */}
          <Route path='Admin/create-category' element={<CreateCategory />} />
          <Route path='Admin/create-product' element={<CreateProduct />} />
          <Route path='Admin/orders' element={<CreateProduct />} />

        </Route>


        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
