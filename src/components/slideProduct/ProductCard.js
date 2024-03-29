import React from 'react'
import './ProductCard.css'
import pro1 from './pro-1.webp'
import pro2 from './pro-2.jpg'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  const data = [
    {
        id:1,
        productName:'outer lid cooker',
        images:[
            {
                id:1,
                img:""
            },
            {
                id:2,
                img:""
            },
            {
                id:3,
                img:""
            },
            {
                id:4,
                img:""
            },
        ],
        property:"bestseller",
        sizes:[
            {
                id:1,
                size:"1.5 Ltr"
            },
            {
                id:2,
                size:"2.5 Ltr"
            },
        ],
        originalPrice:1826,
        discoPrice:150,
        vendor : "Comeo Cookware",
        sku : "IZCFP24",
        avilable : true,
        productType: "Pressure Cooker",
        Desc: "Introducing the Comero Ceramica Frypan the ultimate kitchen companion that will revolutionize your cooking experience!",
        addInfo:{
            base: "Gas and inducation compatible",
            material : "SAS Metal (Triply)",
            dishwasherSafe : "Only Body",
            packageContent : "1-N. Pressure Cooker, 1 N. Pressure Cooker Lid. 1- N. Glass Lid",
            warranty : 5,
            certification : "ISI",
        }
        
    },
    {
        id:2,
        productName:'outer lid cooker',
        images:[
            {
                id:1,
                img:""
            },
            {
                id:2,
                img:""
            },
            {
                id:3,
                img:""
            },
            {
                id:4,
                img:""
            },
        ],
        property:"bestseller",
        sizes:[
            {
                id:1,
                size:"1.5 Ltr"
            },
            {
                id:2,
                size:"2.5 Ltr"
            },
        ],
        originalPrice:1826,
        discoPrice:150,
        vendor : "Comeo Cookware",
        sku : "IZCFP24",
        avilable : true,
        productType: "Pressure Cooker",
        Desc: "Introducing the Comero Ceramica Frypan the ultimate kitchen companion that will revolutionize your cooking experience!",
        addInfo:{
            base: "Gas and inducation compatible",
            material : "SAS Metal (Triply)",
            dishwasherSafe : "Only Body",
            packageContent : "1-N. Pressure Cooker, 1 N. Pressure Cooker Lid. 1- N. Glass Lid",
            warranty : 5,
            certification : "ISI",
        }
        
    }
]
  return (
    <>
      {/* <div className='main-product'>
            <div className="product">
              <div className="img">
                <div>
                  <img loading="lazy" decoding="async" src={pro1} className="front-img" alt="" />
                  <img loading="lazy" decoding="async" src={pro2} className="back-img" alt="" />
                </div>
              </div>
              <Link to="/product" className="product-name">outer lid cooker</Link>
              <div className="sizes">
                  <small>1.5 Ltr</small>
                  <small>2.5 Ltr</small>
              </div>
              <div className="mrp">
                  <div className="original-price">₹1,816.00</div>
                  <small className="cut-price">₹2,270.00</small>
              </div>
              <div className="grid-btn">
                  <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
      </div> */}
        
    </>
  )
}

export default ProductCard