// components/OrderCard.js
import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="shadow-2xl rounded-lg px-44 mb-4 bg-gray-200 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Order ID: {order?.data?._id}</h2>
      <p className="text-gray-700 mb-1">Status: {order?.status}</p>
      <p className="text-gray-700 mb-1">Total: ${order?.amount}</p>
      <p className="text-gray-700">Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default OrderCard;
