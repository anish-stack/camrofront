import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
    return (
        <>

            <section className="page-breadcrumb">
                <div className="row">
                    <div className="col-12">
                        <h2>Terms & Condition</h2>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Terms & Condition</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

        
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
                <p className="mb-4">
                    Welcome to CAMRO - Stainless Steel World. These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                <p className="mb-4">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use CAMRO's website if you do not accept all of the terms and conditions stated on this page.
                </p>
                <h2 className="text-2xl font-semibold mb-2">1. Website Use</h2>
                <p className="mb-4">
                    The use of this website is subject to the following terms of use:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                    <li>It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
                    <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property</h2>
                <p className="mb-4">
                    All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                </p>
                <h2 className="text-2xl font-semibold mb-2">3. Changes to Terms & Conditions</h2>
                <p className="mb-4">
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>
                {/* Add more content as needed */}
            </div>
        </>
    )
}

export default TermCondition