import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NoImage from './no-product-8316266-6632286.webp'
const SearchByName = () => {

    const { name } = useParams()
    const [productData, setProductData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleData = async () => {
        try {

            const response = await axios.get(`https://api.camrosteel.com/api/v1/search?searchTerm=${name}&currentPage=${currentPage}`);
            console.log(response.data);
            setProductData(response.data.data)
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleData()
    }, [currentPage, name])
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <section className="page-breadcrumb">
                <h2>Search By {name}</h2>
                <div aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{name}</li>
                    </ol>
                </div>
            </section>
            <section className="container mt-5">

                <div className="row">
                    <div className="col-md-12">
                        <div className="product-lists main-product shop-page grid-5">
                            {productData.length > 0 ? (
                                productData.map((item, index) => (
                                    <Link to={`/Products/${item.productName}/${item._id}`} className="product" key={index}>
                                        <div className="img">

                                            <img loading="lazy" decoding="async" src={item.images[0].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="front-img" alt="" />
                                            <img loading="lazy" decoding="async" src={item.images[1].img} onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }} className="back-img" alt="" />
                                            <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "bestseller" ? 'bestseller' : ''} ${item.property === "Hot Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>
                                        </div>
                                        <div className="product-name">{item.productName}</div>
                                        <div className="sizes" key={index}>
                                            {item.sizes.map((size, index) => (
                                                <small>{size.size}</small>

                                            ))}
                                        </div>
                                        <div className="mrp">
                                            <div className="original-price">₹{item.originalPrice}</div>
                                            <small className="cut-price">₹{item.discoPrice}</small>
                                        </div>
                                        <div className="grid-btn">
                                            <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                        
                                    <img className='flex rel  items-center justify-center w-full text-center mx-auto' src={NoImage} alt='' />
                              
                            )}
                        </div>
                    </div>
                </div>
                <div className="pagination flex items-center justify-center mt-4">
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className="mr-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                        Previous
                    </button>
                    <span className="text-red-600 text-lg font-bold mx-4">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="ml-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                        Next
                    </button>
                </div>

            </section>
        </>
    )
}

export default SearchByName