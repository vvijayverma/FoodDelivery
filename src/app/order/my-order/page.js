// pages/my-orders.js
"use client";
import React, { useEffect, useState } from "react";
import CustomerHeader from "../../_components/CustomerHeader";
import { useSelector } from "react-redux";
import axiosInstance from "@/app/lib/axiosInstance";
import OrderCard from "../../_components/OrderCard"; // Import the OrderCard component

const MyOrders = () => {
  const { userData } = useSelector((state) => state?.auth);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (userData?._id) {
      fetchMyOrders();
    }
  }, [userData]);

  const fetchMyOrders = async () => {
    const response = await axiosInstance.get(`orders?id=${userData?._id}`);
    if (response?.data?.success) {
      setMyOrders(response?.data?.result);
    }
  };

  return (
    <>
      <CustomerHeader />
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>
        {myOrders && myOrders?.length <=0?
        <h2 className="text-2xl font-bold mb-6 text-center">You do not have any order</h2>
      :""}
        <div className="grid grid-cols-1 gap-6">
          {myOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
