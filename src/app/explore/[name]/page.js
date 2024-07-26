"use client";
import React, { useEffect, useState } from "react";
import CustomerHeader from "@/app/_components/CustomerHeader";
import BackgroundImage from "@/app/_components/BackgroundImage";
import axiosInstance from "@/app/lib/axiosInstance";

import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
import Resto1 from '../../../../public/images/resto1.webp';
import Resto2 from '../../../../public/images/resto2.webp';

import Item from '../../_components/Item';
import { useSelector } from "react-redux";

const RestaurantDetail = (props) => {
  const { userData } = useSelector((state) => state?.auth);

  const name = props.params.name;
  const id = props.searchParams._id;
  const [foodDetails, setFoodDetails] = useState();
  const [restoDetail, setRestoDetail] = useState();

  useEffect(() => {
    fetchRestaurantDetail();
  }, []);

  const fetchRestaurantDetail = async () => {
    try {
      const Response = await axiosInstance.get(`customer/${id}`);
      if (Response.data.success == true) {
        setRestoDetail(Response.data.result);
        setFoodDetails(Response.data.foodItems);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <CustomerHeader />
      <BackgroundImage
        src={Resto2}
        alt="Food Banner"
      >
        <h1 className="absolute top-4 text-4xl font-bold text-white">
          {decodeURI(name)}
        </h1>
      </BackgroundImage>
      <div className="">
        <h2 className="font-bold text-3xl pl-4 my-4 text-center">Food Items</h2>
        <div className="bg-gray-100 grid sm:grid-cols-1 md:grid-cols-4 mx-4">
          {foodDetails &&
            foodDetails?.map((item) => (
              <React.Fragment key={item._id}>
                <CardContainer className="inter-var w-full sm:w-[19rem]">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[25rem] rounded-xl p-2 border flex flex-col justify-between">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold dark:text-white"
                    >
                      Delicious {item.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {item.description}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "250px",
                      }}
                    >
                      <Image
                        src={item.image}
                        className="object-cover rounded-xl group-hover:shadow-xl"
                        fill
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-5">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                     <Item
                      id={item._id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      description={item.description}
                      restoId={item.restoId}  
                      userId={userData?._id}
                     />
                    </div>
                  </CardBody>
                </CardContainer>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
