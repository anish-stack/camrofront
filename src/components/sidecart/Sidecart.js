import React, { useEffect, useState } from 'react';
import './Sidecart.css';
import img from './shopping.png'
import { Link } from 'react-router-dom';
const Sidecart = ({ cartOpen, handleCartClose }) => {
    const CartItems = sessionStorage.getItem('cart');
    const [cart, setCart] = useState([]);
    const [totalMRP, setTotalMRP] = useState(0);
    const shippingFee = 70; // Assuming you have a shipping fee of ₹70
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        const parsedCart = JSON.parse(CartItems) || [];
        setCart(parsedCart);
        calculateTotalMRP(parsedCart);
    }, [CartItems]);

    const calculateTotalMRP = (items) => {
        const total = items.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotalMRP(total);
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity;
        setCart(updatedCart);
        calculateTotalMRP(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDeleteProduct = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        calculateTotalMRP(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const finalPrice = totalMRP
    const handleFinalCart = () => {
        // Create an array to store cart details
        const cartDetails = cart.map(item => {
            return {
                id: item.id,
                productName: item.name,
                quantity: item.quantity,
                price: item.price,
                size: item.size,
                image:item.img
                // Add more properties as needed
            };
        });
    
        // Create an object to store all cart information
        const finalCart = {
            cart: cartDetails,
            totalMRP: totalMRP,
            shippingFee: shippingFee,
            finalPrice: finalPrice
            // Add more properties as needed
        };
    
        // Store finalCart wherever you want, such as session storage
        sessionStorage.setItem('finalCart', JSON.stringify(finalCart));
    };
    
    return (
        <>
            <aside className={`cart-side ${cartOpen ? 'active' : ' '} `}>
                <div className="cart-nav">
                    <div className="back" id="close-aside-cart">
                        <a href="javascript:void(0)" onClick={handleCartClose}><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <h3 className="nav-logo">
                        Bag <i className="fa-solid fa-bag-shopping"></i>
                    </h3>
                </div>

                <div className="cart-main">
                    <div className="login-register">
                        <p>Get Started & grab best offers!</p>
                        {token ? (
                            <a href="/profile">
                                <button>Profile</button>
                            </a>
                        ) : (
                            <a href="/log-in" className="btn">Login / Register</a>
                        )}

                    </div>
                    <div className="products-container">
                        {cart.length === 0 ? (
                            <div className="no-products">
                                <img src={img} alt="Emptey" />
                            </div>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="single-product">
                                    <div className="product-desc row">
                                        <div className="col-4 img">
                                            <img loading="lazy" decoding="async" src={item.img} alt="product-image" />
                                        </div>
                                        <div className="col-7">
                                            <p className="product-name">{item.name}</p>
                                            <small className="size">{item.size}</small>
                                        </div>
                                        <div className="text-end" id="deleteProduct">
                                            <i className="fa-regular fa-trash-can" onClick={() => handleDeleteProduct(index)}></i>
                                        </div>
                                    </div>
                                    <div className="price-qu">
                                        <div className="quan">
                                            <div className="quantity-input">
                                                <i className="fa-solid fa-minus" onClick={() => handleQuantityChange(index, item.quantity - 1)}></i>
                                                <input type="number" min="1" value={item.quantity} max="8" readOnly name="quantity" id="quantity" />
                                                <i className="fa-solid fa-plus" onClick={() => handleQuantityChange(index, item.quantity + 1)}></i>
                                            </div>
                                        </div>
                                        <div key={index} className="price">₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</div>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image"  />
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus" ></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image" />
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus"></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image"/>
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus"></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div> */}
                    </div>

                    {/* Price details */}
                    <div className="price-details">
                        {/* Total MRP */}
                        <small className="flex">
                            <div className="head">Bag MRP ({cart.length} items)</div>
                            <div className="price" id="bagMrpPrice">₹{totalMRP}</div>
                        </small>

                        {/* Shipping fee */}
                        <small className="flex">
                            <div className="head">Shipping &#9432;</div>
                            <div className="">
                                {/* Shipping fee and Free span */}
                                {cart.length > 0 && (
                                    <>
                                        <div className="price cut-price" id="shippingFee">₹{shippingFee}</div>
                                        <span className="free">Free</span>
                                    </>
                                )}

                            </div>
                        </small>

                        {/* Final payable amount */}
                        <small className="flex final">
                            <div className="head">Pay</div>
                            {/* Final payable amount */}
                            <div className="price" id="finalPrice">₹{cart.length > 0 ? finalPrice : 0}</div>

                        </small>
                    </div>
                </div>

                {/* Cart footer */}
                <div className="cart-footer">
                    {/* Total price */}
                    <div className="pricing">
                        <div className="total-price">₹{cart.length > 0 ? finalPrice : 0}</div>
                        <small>Grand Total &#9432;</small>
                    </div>
                    {/* Proceed button */}
                    <a href="/Make-Order-Complete" onClick={handleFinalCart} className="proceed">
                        Proceed <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </aside>
        </>
    );
};

export default Sidecart;
