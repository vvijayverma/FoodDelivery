"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = ({ setLogin, login }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const Response = await axiosInstance.post(`restaurant`, data);
    if (Response?.data?.success == true) {
      toast.success("User sing up successfully");
      reset();
      const { result } = Response.data;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[34.9rem]">
      <div className="bg-slate-50 shadow-2xl shadow-slate-950 rounded-lg p-2 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-gray-600 mb-2 text-center">
          Sign-Up To Restaurant
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="m-2">
            <input
              type="text"
              placeholder="Enter your email address"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="m-2">
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="m-2">
            <input
              type="password"
              placeholder="Confirm your password"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              name="confirmPassword"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="m-2">
            <input
              type="text"
              placeholder="Enter your restaurant name"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              name="name"
              {...register("name", {
                required: "Restaurant name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="m-2">
            <input
              type="text"
              placeholder="Enter your city"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              name="city"
              {...register("city", {
                required: "City is required",
              })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div className="m-2">
            <input
              type="text"
              placeholder="Enter your full address"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              name="address"
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div className="m-2">
            <input
              type="tel"
              placeholder="Enter your contact number"
              className={`w-full rounded border border-gray-500 bg-gray-100 px-4 py-2
               focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.contact ? "border-red-500" : "border-gray-300"
              }`}
              name="contact"
              {...register("contact", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}
          </div>
          <div className="m-2 text-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center ml-16 mt-4">
        {login
          ? ""
          : <div className="flex justify-center items-center mr-16">
            <p>Already have account?&nbsp;</p>
            <button className="text-green-400 font-bold" onClick={() => setLogin(!login)}>Sign-In</button>
            </div>}
      </div>
      </div>
    </div>
  );
};

export default SignUp;
