import React, { useEffect, useRef, useState } from 'react'
import './CategorySlider.css'

import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay} from 'swiper/modules';
// import required modules
// import { Pagination } from 'swiper/modules';
import ProductCard from '../slideProduct/ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategorySlider = () => {

    const [categ,setCateg] = useState([])
    const handleCategories= async()=>{
        try {

            const response = await axios.get("https://api.camrosteel.com/api/v1/getAllCategorey")
            console.log(response.data);
            setCateg(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleCategories()
    },[])

  return (
    <>
        <div className='container md:w-[80%] mt-5 max-w-[1300px] mx-auto'>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: false,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                navigation={false}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                // modules={[Pagination]}
                modules={[Autoplay]}

                className="mySwiper"
            >

                
                {categ.map((item,index)=>(
                    <SwiperSlide>
                        <Link to={`/ProductBy-Category/${item.category}`} className='categories-slider'>
                            <div className="item">
                                <div className="single">
                                    <img loading="lazy" decoding="async" src={item.image} alt="" />
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}

                {/* {productData && productData.map((item, index) => (

                    <SwiperSlide key={index}>
                        <Link to={`/Products/${item.productName}/${item._id}`} className='main-product'>
                            <div className="product">
                                <div className="img">

                                    <img loading="lazy" decoding="async" src={item.images[0].img} className="front-img" alt="" />
                                    <img loading="lazy" decoding="async" src={item.images[1].img} className="back-img" alt="" />
                                    <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "bestseller" ? 'bestseller' : ''} ${item.property === "Hot Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>
                                </div>
                                <div className="product-name">{item.productName}</div>
                                <div className="sizes" key={index}>
                                    {item.sizes.map((size, index) => (
                                        <small>{size.size}</small>

                                    ))}
                                </div>
                                <div className="mrp">
                                    <div className="original-price">₹{item.originalPrice}</div>
                                    <small className="cut-price">₹{item.discoPrice}</small>
                                </div>
                                <div className="grid-btn">
                                    <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
                                </div>
                            </div>
                        </Link>

                    </SwiperSlide>
                ))} */}

            </Swiper>
        </div>
    </>
  )
}

export default CategorySlider