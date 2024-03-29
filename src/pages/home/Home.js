import React from 'react'
import Carasol from '../../components/carasol/Carasol'
import Subhead from '../../components/subhead/Subhead'
import ProductCard from '../../components/slideProduct/ProductCard'
import PaymentFoot from '../../components/paymentfoot/PaymentFoot'
import Slider from '../../components/slider/Slider'
import Sidecart from '../../components/sidecart/Sidecart'
import Category from '../category/Category'
import CategorySlider from '../../components/categorySlider/CategorySlider'
import Banners from '../../components/banners/Banners'
import OurProducts from '../OurProducts/OurProduct'
import Trending from '../../components/slider/Trending'
import NewArrival from '../../components/slider/NewArival'
import HotProducts from '../../components/slider/HotProducts'

const Home = () => {
  return (
    <div>
      <Carasol/>
      <Subhead title="Our Categories" para="Get your personalised " />
      <CategorySlider/>
      <Subhead title="trending Products" para="See Our All Specialized Products" />
      <Trending/>
      <Banners/>
      <Subhead title="new arrivals" para="See Our All Specialized Products" />
      <NewArrival />
      <Subhead title="Hot Products" para="See Our All Hot Products" />
      <HotProducts />
      <Subhead title="Our Products" para="See Our All Products" />
      <OurProducts/>
      {/* <PaymentFoot/> */}
      <Sidecart/>
    </div>
  )
}

export default Home