import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const SingleProduct = () => {


    const [singleData, setData] = useState([]);
    const [info, setInfo] = useState("");
    const [sizes, setSize] = useState([]);
    const [images, setImages] = useState()
    const [num, setNum] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [active, setActive] = useState(null);

    const handleActiveClick = (size) => {
        setActive(size);
        // console.log(size)
    }

    const handleIncreaseNumber = () => {
        if (num >= 8) {
            setNum(num)
        }
        else {
            setNum(num + 1);
        }

    }
    const handleDecreaseNumber = () => {
        if (num == 1) {
            setNum(num)
        }
        else {
            setNum(num - 1);
        }
    }

    const { id } = useParams()
    const handleProductData = async () => {
        try {
            const response = await axios.post(`https://api.camrosteel.com/api/v1/single-product/${id}`)
            console.log(response.data.data)

            setInfo(response.data.data.addInfo)
            setSize(response.data.data.sizes)
            setImages(response.data.data.images)
            console.log(images)
            setData(response.data.data)
            if (response.data.data.sizes.length > 0) {
                setActive(response.data.data.sizes[0]);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleProductData()
    }, [id])

    const handleAddToCart = () => {
        console.log("object")
        if (active === null || num <= 0) {
            toast.error('Select Size and Quantity is Greater Than Zero');
        } else {
            const selectedSize = active.size;
            const selectedQuantity = num;
            const selectedPrice = active.originalPrice;
            const productName = singleData.productName;
            const productId = singleData._id;
            const image = singleData.images[0].img; // Assuming you have an array of images and you want to save the first one

            // Construct product details object
            const productDetails = {
                id: productId,
                name: productName,
                size: selectedSize,
                quantity: selectedQuantity,
                price: selectedPrice,
                img: image
            };

            // Retrieve existing cart items from sessionStorage
            const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

            // Check if the product with the same ID and size already exists in the cart
            const existingProductIndex = cartItems.findIndex(item => item.id === productId && item.size === selectedSize);

            if (existingProductIndex !== -1) {
                // If the product already exists, update its quantity

                cartItems[existingProductIndex].quantity += selectedQuantity;
                console.log("i am hit")
            } else {
                // If the product doesn't exist, add it to the cart
                cartItems.push(productDetails);
                console.log("i am hit second")

            }

            // Store the updated cart items back in sessionStorage
            sessionStorage.setItem('cart', JSON.stringify(cartItems));

            // Optionally, you can dispatch an action to update the cart state in Redux
            // dispatch(addToCart(productDetails));

            // Show a success message
            toast.success('Product added to cart');
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [id]);
    const [slideImage, setSlideImage] = useState('');

    // Set default image when the component mounts
    useEffect(() => {
        if (images && images.length > 0) {
            const imageUrls = images.map((item) => item.img); // Extract image URLs from the images array
            setSlideImage(imageUrls[0] || 'https://i.ibb.co/pPwsHpx/no-image-icon-23494.png');
        }
    }, [images]); // Include images in the dependency array to trigger the effect when images change


    const changeImage = (index) => {
        const mainImage = images[index]?.img || slideImage; // Access image URL at the specified index or fallback to default
        console.log("first", mainImage);
        setSlideImage(mainImage);
    };

    return (
        <>
            <section className="container mt-5 product-page">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-12">
                                <div className='big-img '>

                                    <img

                                        src={slideImage}
                                        onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }}
                                        alt="product-image"
                                        loading='lazy'
                                        className='imgd'
                                        decoding='async'
                                    // Call changeImage function with index as argument
                                    />

                                </div>
                                <div className='small-img'>
                                    {images && images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img.img}
                                            onError={(e) => { e.target.src = "https://i.ibb.co/pPwsHpx/no-image-icon-23494.png" }}
                                            alt="product-image"
                                            loading='lazy'
                                            className='imgd'
                                            decoding='async'
                                            onClick={() => changeImage(index)} // Call changeImage function with index as argument
                                        />
                                    ))}
                                </div>

                            </div>
                            <div className="col-md-12">

                            </div>
                            <div className="col-md-12">



                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="details">
                            <h2>{singleData.productName}</h2>
                            <p className='mt-2'>{singleData.Desc || "Best for Indian, Chinese dishes | Daily use"}</p>

                            <div className="pricing">
                                <p>Offer Price : </p>
                                <div className="actual-price">₹ {active ? (active.discoPrice) : (singleData.discoPrice)} </div>
                                <div className="cut-price">₹{active ? (active.originalPrice) : (singleData.originalPrice)}</div>
                            </div>
                            <p className="desc">{singleData.Desc}</p>

                            <div className="size-btns">
                                {sizes.map((proSize, index) => (
                                    <button key={index} className={`${active === proSize ? 'active' : ''}`} onClick={() => { handleActiveClick(proSize) }} >{proSize.size}</button>
                                ))}
                            </div>

                            <div className="main-btn">
                                <table className="table table-bordered mt-4">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Vendor : </th>
                                            <td>{singleData.vendor}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SKU : </th>
                                            <td>{singleData.sku}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Availablity : </th>
                                            <td>{singleData.avilable ? 'Available' : 'Not Avilable'} in Stock</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Product Type : </th>
                                            <td>{singleData.productType}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="btns">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus" id="minus" onClick={handleDecreaseNumber}></i>
                                        <input type="number" min="1" value={num} max="8" readonly name="quantity" id="quantity" />
                                        <i className="fa-solid fa-plus" id="plus" onClick={handleIncreaseNumber}></i>
                                    </div>
                                    <div className="addToCart">
                                        <button onClick={handleAddToCart}>Add To Cart</button>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-desc-main">
                    <div className="row">
                        <div className="tabs">
                            <h4>Description</h4>
                            <h4>Additional Information</h4>
                        </div>
                        <div className="pills">
                            <div className="single-pill pill1">
                                <p className="text">Introducing Nutrimax: your ultimate kitchen upgrade! With Maximum Nutrient Retention Technology (MNRT) and premium SAS metal construction, our utensils ensure healthier, hygienic cooking. Compatible with induction cooktops, Nutrimax products make every meal a flavorful, nutritious delight.</p>
                                <h5>Features:</h5>
                                <ol>
                                    <li>
                                        <strong className="strong">Maximum Nutrient Retention Technology MNRT:</strong>
                                        <p>Fast Cooking: Cooks at low pressure but cooks fast while retaining maximum nutrients</p>
                                        <p>Superfast Cooking: Cooks at regular pressure for traditional superfast cooking</p>
                                    </li>
                                    <li>
                                        <strong className="strong">Smart Lock:</strong>
                                        <p>Easy smart switch lock system allows you to open and lock your cooker lid with ease.</p>
                                    </li>
                                    <li>
                                        <strong className="strong">Single-Whistle Technology:</strong>
                                        <p>Enables energy efficient cooking by releasing smaller amounts of steam continuously retaining optimum internal pressure</p>
                                    </li>
                                </ol>

                            </div>

                            <div className="single-pill pill2">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th scope="row">BASE</th>
                                            <td>{info.base}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Material</th>
                                            <td>
                                                {info.material}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dishwasher safe</th>
                                            <td>{info.dishwasherSafe}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct