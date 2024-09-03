"use client";
import React, { useEffect, useState } from "react";
import CustomerHeader from "@/app/_components/CustomerHeader";
import BackgroundImage from "@/app/_components/BackgroundImage";
import axiosInstance from "@/app/lib/axiosInstance";

import { CardContainer, CardBody, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
import Resto1 from "../../../../public/images/resto1.webp";
import Resto2 from "../../../../public/images/resto2.webp";

import Item from "../../_components/Item";
import { useSelector } from "react-redux";
import SectionHeader from "@/app/_components/SectionHeader";
import HeroMenu from "@/app/_components/HeroMenu";

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
      <BackgroundImage src={Resto2} alt="Food Banner">
        <h1 className="absolute top-4 text-6xl font-bold text-gray-950">
          {decodeURI(name)}
        </h1>
      </BackgroundImage>
      <div className="mt-8">
        <HeroMenu subHeader={'Check Out'} mainHeader={'Food Items'}/>
        {/* <SectionHeader subHeader={'Check Out'} mainHeader={'Food Items'}/> */}
        {/* <h2 className="font-bold text-3xl pl-4 my-4 text-center">Food Items</h2> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-4 mx-4 my-32">
          {foodDetails &&
            foodDetails?.map((item) => (
              <React.Fragment key={item._id}>
                <CardContainer className="w-full sm:w-[16rem] shadow-2xl bg-gray-100 rounded-md">
                  <CardBody className="shadow-2xl w-full h-[25rem] rounded-xl p-2 border flex flex-col justify-center items-center">
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
