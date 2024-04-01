import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ReturnAndRefund = () => {
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
                        <h2>Return & Refund</h2>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Return & Refund</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Return & Refund Policy</h1>
      <p className="mb-4">
        We want you to be completely satisfied with your purchase from CAMRO - Stainless Steel World. If you are not satisfied with your purchase for any reason, you may return it for a refund or exchange within 4-5 days of receiving your order.
      </p>
      <h2 className="text-2xl font-semibold mb-2">1. Return Eligibility</h2>
      <p className="mb-4">
        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
      </p>
      <h2 className="text-2xl font-semibold mb-2">2. Return Process</h2>
      <p className="mb-4">
        To initiate a return, please contact our customer service team with your order number and reason for return. We will provide you with instructions on how to return your item.
      </p>
      <h2 className="text-2xl font-semibold mb-2">3. Refund Processing</h2>
      <p className="mb-4">
        Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.
      </p>
      <h2 className="text-2xl font-semibold mb-2">4. Return Shipping</h2>
      <p className="mb-4">
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
      </p>
      <h2 className="text-2xl font-semibold mb-2">5. Exchanges</h2>
      <p className="mb-4">
        If you would like to exchange your item for a different size or color, please contact our customer service team for assistance.
      </p>
      {/* Add more content as needed */}
    </div>
    </div>
  )
}

export default ReturnAndRefund
