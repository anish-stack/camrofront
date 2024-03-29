import React from 'react'
import './PaymentFoot.css'
import paymentImg from './payment.png'
const PaymentFoot = () => {
  return (
    <>
        <section className="payment-method mt-5 mx-4">
            <div className="container mx-auto">
                <div className="row payment-1 ">
                    <div className="col-md-4 single">
                        <i className="fa-solid fa-truck-fast"></i>
                        <h5>Free Shipping</h5>
                    </div>
                    <div className="col-md-4 single">
                        <i className="fa-solid fa-wallet"></i>
                        <h5>COD Available</h5>
                    </div>
                    <div className="col-md-4 single contact">
                        <h5>Have Queries or Concerns ?</h5>
                        <a href="./contact.html" className="contact-us-btn">Contact Us</a>
                    </div>
                </div>
                <div className="row payment-2">
                    <div className="col-12">
                        <h5>PAYMENT</h5>
                        <p> <i className="fa-solid fa-shield"></i>  100% Payment Protection, Easy Return Policy 100% Payment Protection, Easy Return Policy</p>
                        <div className="row grid grid-cols-1 sm:grid-cols-2">
                            <div className="col-md-6">
                                <img loading="lazy" decoding="async" src={paymentImg} alt="payment-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PaymentFoot