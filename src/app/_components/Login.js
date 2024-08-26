"use client"
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosInstance from "../lib/axiosInstance";

const Login = ({setLogin,login}) => {
  // const {order} = useParams()
  // console.log(order,'====================');
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    data['login']=true;
    const Response = await axiosInstance.post(`restaurant`,data);
    // console.log(Response,"==rrrrrrrr===");
    if (Response?.data?.success == true) {
        toast.success("Login successfully");
        // console.log(Response.data,"=====");
        reset();
        const {result}= Response.data;
        delete result?.password;
        localStorage.setItem("restaurantUser",JSON.stringify(result));
        router.push("/restaurant/dashboard")
    }else{
      toast.success("Restaurant not fount Or incorrect information");
      reset();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[34.9rem]">
    <div className="bg-slate-100 shadow-slate-950 shadow-2xl rounded-lg p-8 max-w-lg w-full">
      <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Login To Restaurant</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="m-2">
          <input
            type="text"
            placeholder="Enter your email address"
            className={`w-full rounded border bg-gray-100 border-gray-500 px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.email ? "border-red-300" : "border-gray-300"
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
        <div className="m-2">
          <input
            type="password"
            placeholder="Enter your password"
            className={`w-full rounded border bg-gray-100 border-gray-500 px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-red-300 ${
                errors.password ? "border-red-300" : "border-gray-300"
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
        <div className="m-2 text-center">
        <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center ml-12 mt-4">
          {login ? (
            <div className="flex justify-center items-center mr-12">
              <p>Do not have account?&nbsp;</p>
              <button className="text-green-400 font-bold" onClick={() => setLogin(!login)}>Sign-Up</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
