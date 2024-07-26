"use client"
import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { userSignUp } from "../features/authSlice";

const UserLogin = ({redirect,setLogin,login}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    data['login']=true;
    const Response = await axiosInstance.post(`user/login`,data);
    if (Response?.data?.success == true) {
        toast.success("Login successfully");
        reset();
        const {result}= Response.data;
        delete result.password;
        dispatch(userSignUp(result));
        if (redirect.order) {
          router.push('/order')
      }else{
          router.push("/");
      }
    }else{
      toast.success("User not found Or incorrect information");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[34.9rem] bg-gradient-to-r from-red-400 to-pink-500">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Login User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter your email address"
            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 ${
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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 ${
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
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <div className="text-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <button onClick={() => setLogin(!login)} className='text-center ml-12 mt-4'>
          {login
            ? "Do not have account ? Sing-Up"
            : "Already have account ? Login"}
        </button>
    </div>
  </div>
  );
};

export default UserLogin;
