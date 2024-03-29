import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PrivcayAndPolicy = () => {
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
                        <h2>Privacy Policy</h2>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us at CAMRO - Stainless Steel World. Our privacy policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or make a purchase.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, shipping address, and payment details when you place an order on our website.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to process your orders, communicate with you about your purchases, and improve our products and services. We may also use your information to send you promotional offers and updates about our company.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Security Measures</h2>
      <p className="mb-4">
        We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information at any time. You may also opt out of receiving promotional emails from us by following the instructions provided in the email.
      </p>
      {/* Add more content as needed */}
    </div>
    </div>
  )
}

export default PrivcayAndPolicy
