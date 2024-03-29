import React from 'react';
import error from "./404.png"
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">Sorry, the page you are looking for could not be found.</p>
      <img src={error} alt="404 Error" className="w-64 h-64 mb-8" />
      <a href="/" className="text-blue-600 underline">Return to Homepage</a>
    </div>
  );
};

export default NotFoundPage;
