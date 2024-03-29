import React from 'react';
import Fail  from './5576278.webp'
import { Link } from 'react-router-dom';
const OrderFailPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Order Failed</h1>
      <p className="text-lg text-gray-700 mb-8">Sorry, your order could not be processed at this time.</p>
      <img src={Fail} alt="Order Fail" className="w-64 h-64 mb-8" />
      <Link to="/" className="text-blue-600 underline">Return to Homepage</Link>
    </div>
  );
};

export default OrderFailPage;
