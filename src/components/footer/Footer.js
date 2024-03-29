import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="logo"><img loading="lazy" decoding="async" src={logo} alt="logo" /></div>
              <p>
                <strong>Address :</strong>
                <a to="">B-91 Rohini Phase 2 New Delhi-110084</a>
              </p>
              <p>
                <strong>Contact Us :</strong>
                <a to="tel:+919876543210">+91-8595722922</a>
              </p>
              {/* <a to="" className="icon"><i className="fa-brands fa-instagram"></i></a>
              <a to="" className="icon"><i className="fa-brands fa-square-facebook"></i></a>
              <a to="" className="icon"><i className="fa-brands fa-twitter"></i></a>
              <a to="" className="icon"><i className="fa-brands fa-whatsapp"></i></a> */}
            </div>
            <div className="col-md-3">
              <div className="head">Quick Links</div>
              <ul>

                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/log-in">login</Link></li>
                <li><Link to="/sign-up">SignUp</Link></li>


              </ul>
            </div>
            <div className="col-md-3">
              <div className="head">Follow us </div>
              <div className='flex mr-2 mb-3 md:flex-col items-start'>
                <a href="https://www.instagram.com/camrosteel?igsh=NmtrZGY3Zms2b2N6" className="icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/CamroSteels?mibextid=ZbWKwL" className="icon"><i className="fa-brands fa-square-facebook"></i></a>
                <a href="https://youtube.com/@utensil_camrosteel?si=Gym2MWKq5WQLtGj8" className="icon"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="icon"><i className="fa-brands fa-whatsapp"></i></a>
              </div>

            </div>
            <div className="col-md-3">
              <div className="head">Policy</div>
              <ul>
                <li><Link to="/term-and-condition-policy">Terms & Condition</Link></li>
                <li><Link to="/Shipping-Policy">Shipping & Delivery</Link></li>
                <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
                <li><Link to="/Return-and-Refund-policy">Return & Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center py-2">
            <div className="copyright">
              <p>© 2024, CAMRO - <Link to="https://www.digiindiasolutions.com/" target="_blank">DIGI INDIA SOLUTIONS</Link></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer