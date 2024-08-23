"use client";
import { useEffect, useState } from "react";
import { AuroraBackgroundCom } from './_components/AuroraBackgroundCom';
import CustomerHeader from "./_components/CustomerHeader";
import Hero from "./_components/Hero";
import HeroMenu from "./_components/HeroMenu";
import SectionHeader from "./_components/SectionHeader";
import { VortexCom } from './_components/VortexCom';
import { HoverEffect } from "./components/ui/card-hover-effect";
import axiosInstance from "./lib/axiosInstance";
import Cards from './_components/Cards';

export default function Home() {
  const [foodItems, setFoodItems] = useState<any>(null);
  const [restaurantData, setRestaurantData] = useState<any>(null);

  useEffect(() => {
    fetchFoodItems();
    fetchRestaurants();
  }, []);
  const fetchFoodItems = async () => {
    try {
      const Response = await axiosInstance.get(`restaurant/foodItem`);
      // console.log(Response,'===========');
      if (Response.data.success) {
        setFoodItems(Response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const Response = await axiosInstance.get(`/customer`);
      if (Response?.data?.success) {
        setRestaurantData(Response?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CustomerHeader />
      <Hero />
      <HeroMenu subHeader={'check out'} mainHeader={'Restaurants'} className={''}/>
      <HoverEffect items={restaurantData} />
      <HeroMenu subHeader={'check out'} mainHeader={'Foods Items'} className={'pt-24'}/>
      <Cards foodItems={foodItems}/>
     <AuroraBackgroundCom/>
        <VortexCom/>
    </>
  );
}
