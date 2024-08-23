import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UpdateFoodItem } from "../features/updateSlice";
import axiosInstance from "../lib/axiosInstance";

const AddItem = ({ setAddItem }) => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const { updateFoodItem } = useSelector((state) => state.update);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    if (updateFoodItem !== null) {
      setValue("name", updateFoodItem?.name);
      setValue("price", updateFoodItem?.price);
      setValue("image", updateFoodItem?.image);
      setValue("description", updateFoodItem?.description);
    }
  }, []);

  const onSubmit = async (data) => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      data["restoId"] = restaurantData._id;
    }
    if (updateFoodItem == null) {
      const Response = await axiosInstance.post(`restaurant/foodItem`, data);
      if (Response?.data?.success == true) {
        toast.success("Item added successfully");
        reset();
        setAddItem(false);
      }
    } else {
      const Response = await axiosInstance.put(`restaurant/foodItem/${updateFoodItem?._id}`,data);
      if (Response?.data?.success == true) {
        toast.success("Item Updated successfully");
        reset();
        setAddItem(false);
        dispatch(UpdateFoodItem(null));
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[31.9rem] bg-gradient-to-r from-red-400 to-pink-500">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Add New Food Items</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter food name"
            className={`w-full rounded border px-4 py-2 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            name="name"
            {...register("name", {
              required: "food name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter your price"
            className={`w-full rounded border px-4 py-2 ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            name="price"
            {...register("price", {
              required: "price is required",
            })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter live image path"
            className={`w-full rounded border px-4 py-2 ${
              errors.image ? "border-red-500" : "border-gray-300"
            }`}
            name="image"
            {...register("image", {
              required: "image path is required",
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter your full description"
            className={`w-full rounded border px-4 py-2 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            name="description"
            {...register("description", {
              required: "description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <div className="m-2 text-center">
        <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="submit"
          >
            Add Food Item
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default AddItem;
