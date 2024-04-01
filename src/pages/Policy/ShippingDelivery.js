import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ShippingDelivery = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div>
              <section className="page-breadcrumb">
                <div className="row">
                    <div className="col-12">
                        <h2>Shipping & Delivery</h2>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Shipping & Delivery</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

        
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Shipping & Delivery</h1>
      <p className="mb-4">
        At CAMRO - Stainless Steel World, we aim to provide you with the best possible shopping experience. Here's what you need to know about our shipping and delivery:
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Shipping Rates</h2>
      <p className="mb-4">
        Shipping rates may vary based on your location and the size of your order. You will be notified of the shipping charges during the checkout process.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Delivery Time</h2>
      <p className="mb-4">
        We strive to process and dispatch orders within 2-3 business days of receiving payment. Delivery times may vary depending on your location and the shipping method chosen. You will receive a tracking number once your order has been dispatched.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. International Shipping</h2>
      <p className="mb-4">
        We offer international shipping to select countries. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Damaged or Lost Items</h2>
      <p className="mb-4">
        In the unlikely event that your order arrives damaged or is lost in transit, please contact us immediately so we can assist you in resolving the issue.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Delivery Options</h2>
      <p className="mb-4">
        We partner with reputable courier services to ensure the safe and timely delivery of your orders. You may have the option to choose between standard and expedited shipping methods during checkout.
      </p>
      {/* Add more content as needed */}
    </div>
    </div>
  )
}

export default ShippingDelivery
