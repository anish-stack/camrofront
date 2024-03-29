
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './components/slideProduct/Product';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Shop from './pages/shop/Shop';
import Category from './pages/category/Category';
import Login from './pages/login/Login';
import { useState } from 'react';

import {Toaster} from 'react-hot-toast'
import SignIn from './pages/signin/SignIn';
import UserProfile from './pages/userProfile/UserProfile';
import OrderConfirm from './pages/orderConfirm/OrderConfirm';
import CategoryProducts from './pages/categoryProducts/CategoryProducts';
import SearchByName from './pages/searchByName/SearchByName';
import FinalCart from './pages/Finalcart/FinalCart';
import ShippingDelivery from './pages/Policy/ShippingDelivery';
import TermCondition from './pages/Policy/TermConditions';
import ReturnAndRefund from './pages/Policy/ReturnAndRefund';
import PrivcayAndPolicy from './pages/Policy/PrivcayAndPolicy';
import OrderFailPage from './pages/orderConfirm/OrderFail';
import NotFoundPage from './pages/singleProduct/Error';
function App() {
  const [login,setLogin] = useState(true   )
  return (

    <BrowserRouter>
    {login ? (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Products/:name/:id' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/categories' element={<Category />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-up' element={<SignIn />} />
        <Route path='/order-confirmed' element={<OrderConfirm />} />
        <Route path='/order-Fail' element={<OrderFailPage />} />
        <Route path='/*' element={<NotFoundPage />} />

        <Route path='/ProductBy-Category/:name' element={<CategoryProducts />} />
        <Route path='/Search-By/:name' element={<SearchByName />} />
        <Route path='/Make-Order-Complete' element={<FinalCart />} />
        <Route path='/Shipping-policy' element={<ShippingDelivery />} />
        <Route path='/term-and-condition-policy' element={<TermCondition />} />
        <Route path='/Return-and-Refund-policy' element={<ReturnAndRefund />} />
        <Route path='/Privacy-Policy' element={<PrivcayAndPolicy />} />






        <Route path='/profile' element={<UserProfile />} />
      </Routes>
      <Footer />
     
    </>
  ) : (
    <>
     <Routes>
     <Route path='/log-in' element={<Login />} />

     <Route path='/sign-in' element={<SignIn />} />
     </Routes>

   
    </>
   
    
  )}
   <Toaster/>
    </BrowserRouter>
  );
}

export default App;
