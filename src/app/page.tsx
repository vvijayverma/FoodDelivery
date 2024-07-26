
"use client"
import CustomerHeader from "./_components/CustomerHeader";
import BackgroundImage from "./_components/BackgroundImage";
import React,{ useEffect, useState } from "react";
import axiosInstance from "./lib/axiosInstance";
import { HoverEffect } from "./components/ui/card-hover-effect";
import Resto from '../../public/images/resto.jpg';
import Resto1 from '../../public/images/resto1.webp';
import Resto2 from '../../public/images/resto2.webp';

export default function Home() {
  const [locationName,setLocationName]=useState<any>(null);
  const [restaurantData,setRestaurantData]=useState<any>(null);

  useEffect(()=>{
    fetchLocationNames();;
    fetchRestaurants();
  },[])
  const fetchLocationNames =async()=>{
    try {
        const Response = await axiosInstance.get(`/customer/location`);
        if (Response.data.success) {
          setLocationName(Response.data.result)
        }
    } catch (error) {
      console.log(error);
      
    }
  }

  const fetchRestaurants =async()=>{
    try {
        const Response = await axiosInstance.get(`/customer`);
        if (Response?.data?.success) {
          setRestaurantData(Response?.data?.result)
        }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <CustomerHeader />
    <BackgroundImage src={Resto} alt="Food Banner">
      <h1 className="absolute top-4 text-4xl font-bold text-white">
        Food Delivery App
      </h1>
    </BackgroundImage>
    <div className="w-full mx-auto px-8 py-2 bg-gray-300">
      <h2 className="text-3xl font-bold text-center">All Available Restaurants</h2>
      <HoverEffect items={restaurantData} />
    </div>
    </>
  );
}
