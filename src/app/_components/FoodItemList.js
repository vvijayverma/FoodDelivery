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
      <div className="bg-gray-100 grid sm:grid-cols-1 md:grid-cols-4 mx-4 my-12">
        {foodItems &&
          foodItems?.map((item) => (
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
                      layout="fill"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between gap-2 font-bold text-3xl mt-2">
                    <TbEdit
                      className="cursor-pointer bg-blue-500 p-1 rounded"
                      onClick={() => UpdateFood(item)}
                    />
                    <MdDelete
                      className="cursor-pointer bg-red-500 p-1 rounded"
                      onClick={() => DeleteItem(item._id)}
                    />
                  </div>
                  {/* <div className="flex justify-between items-center mt-2">
                  <CardItem
                    translateZ={20}
                    // as={Link}
                    // href=""
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Add To Cart
                  </CardItem>
                </div> */}
                </CardBody>
              </CardContainer>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default FoodItemList;
