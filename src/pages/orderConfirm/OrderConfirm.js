import React from 'react'
import './OrderConfirm.css'
import { Link } from 'react-router-dom'
import order from './7778129.webp'
const OrderConfirm = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Successful!</h1>
      <p className="text-lg text-gray-700 mb-8">Your order has been placed successfully.</p>
      <img src={order} alt="Order Success" className="w-64 h-64 mb-8" />
      <Link to="/shop" className="text-blue-600 underline">Continue Shopping</Link>
    </div>
        {/* <section class="order-confirm my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h3>Your Trusted CAMRO  </h3>
                        <div class="flex-row">
                            <div class="icon"><i class="fa-regular fa-circle-check"></i></div>
                            <div class="content">
                                <p>Order #78994HF</p>
                                <strong>Thank You Tanishq</strong>
                            </div>
                        </div>

                        <div class="bordered-box">
                            <h4>Your Order is Confirmed</h4>
                            <p class="text">You'll recieve a confirmed email with your order number shortly.</p>
                        </div>
                        <div class="bordered-box">
                            <h4>Customer information</h4>
                            <div class="row table-inner">
                                <div class="col-md-6">
                                    <div class="strong">Contact Information</div>
                                    <p>customer@example.com</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Payment method</div>
                                    <p>COD</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Shipping address</div>
                                    <p>Customer Name</p>
                                    <p>Address Rohini -21 , New Delhi</p>
                                    <p>Delhi , India</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Billing address</div>
                                    <p>Customer Name</p>
                                    <p>Address Rohini -21 , New Delhi</p>
                                    <p>Delhi , India</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Shipping method</div>
                                    <p>First Class Package</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-md-5 ">
                        <div class="bordered-box cart-subtotal">
                            <div class="font-semibold mb-2" style={{color:'var(--color-red)'}}>Cart Subtotal</div>
                            <ul>
                                <li class="flex justify-between mb-1"><span>Sub-Total:</span>₹1161.00</li>
                                <li class="flex justify-between mb-1"><span>Tax (-4.00):</span>₹11.00</li>
                                <li class="flex justify-between mb-1"><span>Shipping Cost:</span>₹00.00</li>
                                <li class="flex justify-between font-bold"><span>TOTAL:</span>₹1172.00</li>
                            </ul>
                        </div>

                        <div className="text-center go-to bg-slate-200">
                            <Link to='/'>GO TO HOMEPAGE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  )
}

export default OrderConfirm