import React, { useEffect, useRef, useState } from 'react'
import './Slider.css'

import { Swiper, SwiperSlide } from 'swiper/react';



// import required modules
// import { Pagination } from 'swiper/modules';
import ProductCard from '../slideProduct/ProductCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Autoplay} from 'swiper/modules';

const HotProducts = () => {
    // const data = [
    //     {
    //         id:1,
    //         productName:'outer lid cookers',
    //         images:[
    //             {
    //                 id:1,
    //                 img:"https://i.ibb.co/MVCbbWm/pro-1.webp"
    //             },
    //             {
    //                 id:2,
    //                 img:"https://i.ibb.co/LCWtyKh/1-5-ltr.jpg"
    //             },
    //             {
    //                 id:3,
    //                 img:""
    //             },
    //             {
    //                 id:4,
    //                 img:""
    //             },
    //         ],
    //         property:"bestseller",
    //         sizes:[
    //             {
    //                 id:1,
    //                 size:"1.5 Ltr"
    //             },
    //             {
    //                 id:2,
    //                 size:"2.5 Ltr"
    //             },
    //         ],
    //         originalPrice:1826,
    //         discoPrice:150,
    //         vendor : "Comeo Cookware",
    //         sku : "IZCFP24",
    //         avilable : true,
    //         productType: "Pressure Cooker",
    //         Desc: "Introducing the Comero Ceramica Frypan the ultimate kitchen companion that will revolutionize your cooking experience!",
    //         addInfo:{
    //             base: "Gas and inducation compatible",
    //             material : "SAS Metal (Triply)",
    //             dishwasherSafe : "Only Body",
    //             packageContent : "1-N. Pressure Cooker, 1 N. Pressure Cooker Lid. 1- N. Glass Lid",
    //             warranty : 5,
    //             certification : "ISI",
    //         }

    //     },
    //     {
    //         id:2,
    //         productName:'outer lid cooker',
    //         images:[
    //             {
    //                 id:1,
    //                 img:""
    //             },
    //             {
    //                 id:2,
    //                 img:""
    //             },
    //             {
    //                 id:3,
    //                 img:""
    //             },
    //             {
    //                 id:4,
    //                 img:""
    //             },
    //         ],
    //         property:"Highly",
    //         Category: "cooker",
    //         sizes:[
    //             {
    //                 id:1,
    //                 size:"1.5 Ltr"
    //             },
    //             {
    //                 id:2,
    //                 size:"2.5 Ltr"
    //             },
    //         ],
    //         originalPrice:1826,
    //         discoPrice:150,
    //         vendor : "Comeo Cookware",
    //         sku : "IZCFP24",
    //         avilable : true,
    //         productType: "Pressure Cooker",
    //         Desc: "Introducing the Comero Ceramica Frypan the ultimate kitchen companion that will revolutionize your cooking experience!",
    //         addInfo:{
    //             base: "Gas and inducation compatible",
    //             material : "SAS Metal (Triply)",
    //             dishwasherSafe : "Only Body",
    //             packageContent : "1-N. Pressure Cooker, 1 N. Pressure Cooker Lid. 1- N. Glass Lid",
    //             warranty : 5,
    //             certification : "ISI",
    //         }

    //     }
    // ]
    // console.log(data);


    const [productData, setProductData] = useState([])
    const handleData = async () => {
        try {
            const response = await axios.get("https://api.camrosteel.com/api/v1/all-product");
            console.log(response.data.data);
            const productss = response.data.data
            const filterProduct = productss.filter((item)=>item.property==="Hot-Product"
             ) 
            setProductData(filterProduct)
            console.log("hot",filterProduct)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleData()
    }, [])
    return (
        <>
            <div className='max-w-[1300px] mx-auto'>
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
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {productData && productData.map((item, index) => (

                        <SwiperSlide key={index}>
                            <Link to={`/Products/${item.productName}/${item._id}`} className='main-product'>
                                <div className="product">
                                    <div className="img">

                                        <img loading="lazy" decoding="async" src={item.images[0].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="front-img" alt="" />
                                        <img loading="lazy" decoding="async" src={item.images[1].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="back-img" alt="" />
                                        <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "Trending" ? 'topSelling' : ''} ${item.property === "New Arrival" ? 'bestseller' : ''} ${item.property === "Hot-Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>
                                    </div>
                                    <div className="product-name">{item.productName}</div>
                                    <div className="sizes" key={index}>
                                        {item.sizes.map((size, index) => (
                                            <small>{size.size}</small>

                                        ))}
                                    </div>
                                    <div className="mrp">
                                        {item.sizes.length > 0 && (
                                            <div className="mrp">
                                                <div className="original-price">₹{item.sizes[0].originalPrice}</div>
                                                <div className="cut-price">₹{item.sizes[0].discoPrice}</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid-btn">
                                        <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
                                        {/* <a href="" className="Wishlist"><i className="fa-regular fa-heart"></i></a> */}
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    )
}

export default HotProducts