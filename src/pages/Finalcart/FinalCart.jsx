import React, { useState, useEffect } from 'react'
import './finalcart.css'
import axios from "axios";
import toast from 'react-hot-toast';
const FinalCart = () => {
    const FinalCart = sessionStorage.getItem('finalCart') || "{}"; // Set default value as "{}" (empty object) if no data found
    const MakeOrder = JSON.parse(FinalCart);
    const token = sessionStorage.getItem("token")
    if(!token){
        window.location.href="/log-in"
    }
    console.log(MakeOrder)
    const [Order, setOrder] = useState({
        cartItems: MakeOrder.cart || [],
        address: [{
            street: "",
            city: "",
            state: "",
            pincode: ""

        }],
        PyamentType: "",
        TotalAmount: MakeOrder.totalMRP || 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'street' || name === 'city' || name === 'state' || name === 'pincode') {
            setOrder(prevOrder => ({
                ...prevOrder,
                address: {
                    ...prevOrder.address,
                    [name]: value
                }
            }));
        } else {
            setOrder(prevOrder => ({
                ...prevOrder,
                [name]: value
            }));
        }
    };


    function generateMerchantTransactionId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let transactionId = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            transactionId += allowedCharacters.charAt(randomIndex);
        }

        return transactionId;
    }

    function MerchenatId() {
        const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const idLength = 25;
        let MerchenatIds = '';

        for (let i = 0; i < idLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
            MerchenatIds += allowedCharacters.charAt(randomIndex);
        }

        return MerchenatIds;
    }

    const merchantTransactionId = generateMerchantTransactionId();
    const MerchenatIds = MerchenatId();



    const [PayData, setPayData] = useState({
        amount: MakeOrder.finalPrice,
        Merchenat: MerchenatIds,
        transactionId: merchantTransactionId,
    });
    const handlePaySubmit = async () => {
        try {
            const response = await axios.post('https://api.camrosteel.com/api/v2/payment-create', PayData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response);

            const redirectUrl = response.data.paydata.data.instrumentResponse.redirectInfo.url;

            if (redirectUrl) {
                window.location.href = redirectUrl;
                // sessionStorage.removeItem('cart')
                // sessionStorage.removeItem('finalCart')

            } else {
                alert('Something went wrong while creating the payment');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const { street, city, state, pincode } = Order.address[0];
        // const emptyFields = [];
        
        // if (!street.trim()) {
        //     emptyFields.push('Street');
        // }
        
        // if (!city.trim()) {
        //     emptyFields.push('City');
        // }
        
        // if (!state.trim()) {
        //     emptyFields.push('State');
        // }
        
        // if (!pincode.trim()) {
        //     emptyFields.push('Pincode');
        // }
        
        // if (emptyFields.length > 0) {
        //     const errorMessage = `Address information is incomplete. Please provide the following fields: ${emptyFields.join(', ')}`;
        //     console.error(errorMessage);
        //     toast.error(errorMessage);
        //     return;
        // }
        
        if (Order.PyamentType === "Online") {
            console.log(Order)

            await handlePaySubmit();
      
            try {
                const response = await axios.post('https://api.camrosteel.com/api/v1/create-order', Order, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Order creation response:', response.data);


            } catch (error) {
                console.error('Order creation Error:', error);
            }
        }
        else {
            console.log(Order)
            try {
                const response = await axios.post('https://api.camrosteel.com/api/v1/create-order', Order, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log('Order creation response:', response.data);
                window.location.href="/order-confirmed"

            } catch (error) {
                console.error('Order creation Error:', error);
                window.location.href="/order-fail"

            }
        }
        // console.log(Order);

    };
    return (
        <>


            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                ><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg
                                    ></a>
                                <span className="font-semibold text-gray-900">Shop</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                                <span className="font-semibold text-gray-900">Shipping</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                <span className="font-semibold text-gray-500">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {MakeOrder && MakeOrder.cart && MakeOrder.cart.length > 0 ? (
                            MakeOrder.cart.map((item, index) => (
                                <div key={index} className="flex flex-col rounded-lg bg-white sm:flex-row">
                                    <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-semibold">{item.productName}</span>
                                        <span className="font-semibold">Quantity: {item.quantity}</span>
                                        <span className="float-right text-[#DC3545]">{item.size}</span>
                                        <p className="text-lg font-bold text-[#DC3545]">Rs {item.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No products in the cart</p>
                        )}

                    </div>


                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Billing Address</p>
                    <p className="text-gray-400">Complete your order by providing your Address details.</p>
                    <form onSubmit={handleSubmit} className="">
                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Street</label>
                        <div className="relative">
                            <input onChange={handleChange} type="text" required={true} id="street" value={Order.address.street} name="street" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                        </div>
                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">City</label>
                        <div className="relative">
                            <input onChange={handleChange} type="text" required={true} id="card-holder" value={Order.address.city} name="city" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Youy City" />
                        </div>
                        <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">State</label>
                        <div className="flex">
                            <div className="relative w-full">
                                <input onChange={handleChange} type="text" required={true} id="card-no" name="state" value={Order.address.state} className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter Youy State" />
                            </div>

                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">pincode</label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative w-full">
                                <input onChange={handleChange} type="text" required={true} id="billing-address" value={Order.address.pincode} name="pincode" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Pincode" />
                            </div>

                        </div>
                        <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Payment Type</label>
                        <div className="flex flex-col sm:flex-row">

                            <div className="relative w-full">
                                <select
                                    onChange={handleChange}
                                    value={Order.PyamentType}
                                    name="PyamentType"
                                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow-sm leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    <option value="">Select Payments Method</option>

                                    <option value="COD">COD</option>
                                    <option value="Online">Online</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 10.707a1 1 0 001.414 0L10 9.414l1.293 1.293a1 1 0 101.414-1.414l-2-2a1 1 0 00-1.414 0l-2 2a1 1 0 000 1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>


                        </div>

                        <div className="mt-6 border-t border-b py-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                <p className="font-semibold text-gray-900"> Rs {MakeOrder.totalMRP}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">Shipping</p>
                                <p className="font-semibold text-gray-900">Rs {MakeOrder.shippingFee}</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900">Rs {MakeOrder.finalPrice}</p>
                        </div>
                    <button type='submit' className="mt-4 mb-8 w-full rounded-md bg-[#DC3545] px-6 py-3 font-medium text-white">Place Order</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FinalCart