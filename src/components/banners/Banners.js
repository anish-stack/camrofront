import React from 'react'
import b1 from './banner1.jpeg'
import b2 from './banner2.jpeg'
import { Link } from 'react-router-dom'

const Banners = () => {
  return (
    <>
        <div className="container my-5 md:w-[80%] mx-auto">
            <div className="row">
                <Link to="/shop" className="col-sm-6">
                    <img src={b1} alt="banner-image" loading='lazy' decoding='async'  />
                </Link>
                <Link to="/shop" className="col-sm-6">
                    <img src={b2} alt="banner-image" loading='lazy' decoding='async'  />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Banners