// components/OrderCard.js
import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">Order ID: {order?.data?._id}</h2>
      <p className="text-gray-700 mb-1">Status: {order?.status}</p>
      <p className="text-gray-700 mb-1">Total: ${order?.amount}</p>
      <p className="text-gray-700">Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default OrderCard;
