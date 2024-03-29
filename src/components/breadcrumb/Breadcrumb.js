import React from 'react'
import './Breadcrumb.css'
const Breadcrumb = () => {
  return (
    <>
        <section className="page-breadcrumb">
            <div className="row">
                <div className="col-12">
                    <h2>About Us</h2>
                    <div aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Breadcrumb