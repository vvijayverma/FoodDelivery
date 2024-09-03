import React, { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";
import Image from "next/image";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFoodItem } from "../features/updateSlice";

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

const FoodItemList = ({ setAddItem }) => {
  const [foodItems, setFoodItems] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("restaurantUser"));
    if (id) {
      getFoodItems();
    }
  }, []);

  const getFoodItems = async () => {
    const id = JSON.parse(localStorage.getItem("restaurantUser"));
    const Response = await axiosInstance.get(`restaurant/foodItem/${id?._id}`);
    if (Response?.data?.success) {
      setFoodItems(Response?.data?.result);
    }
  };

  const DeleteItem = async (id) => {
    const Response = await axiosInstance.delete(`restaurant/foodItem/${id}`);
    if (Response?.data?.success) {
      getFoodItems();
    }
  };

  const UpdateFood = (item) => {
    dispatch(UpdateFoodItem(item));
    setAddItem(true);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Added Food Items</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 mx-4 my-12">
        {foodItems &&
          foodItems?.map((item) => (
            <React.Fragment key={item._id}>
              <CardContainer className="w-full sm:w-[19rem]">
                <CardBody className="bg-gray-50 relative w-full h-[20rem] shadow-2xl rounded-lg border flex flex-col justify-center items-center">
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
                      className="object-cover rounded-xl group-hover:shadow-xl pb-2"
                      layout="fill"
                      // objectFit="cover"
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
                    className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <div className="flex justify-between gap-24 font-bold mt-1">
                    <button className="flex gap-1 justify-center items-center bg-blue-300 rounded-lg px-2">
                      <TbEdit
                        className="cursor-pointer rounded"
                        onClick={() => UpdateFood(item)}
                      />
                      Edit
                    </button>
                    <button className="flex gap-1 justify-center items-center bg-red-500 rounded-lg px-2 py-1">
                      <MdDelete
                        className="cursor-pointer bg-red-500 rounded"
                        onClick={() => DeleteItem(item._id)}
                      />
                      Delete
                    </button>
                  </div>
                </CardBody>
              </CardContainer>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default FoodItemList;
