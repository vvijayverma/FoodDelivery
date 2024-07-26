"use client";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import CustomerHeader from "@/app/_components/CustomerHeader";
import axiosInstance from "../lib/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { emptyCart } from "../features/cartSlice";

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state?.cart);
  const { userData } = useSelector((state) => state?.auth);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const PlaceYourOrder = async () => {
    let foodItemId = cart?.map((item) =>item.id).toString();
    const data = {
      userId: userData?._id,
      foodItemId,
      restoId: cart[0]?.restoId,
      status: "Confirm",
      amount: getTotal().totalPrice + (getTotal().totalPrice / 100) * 10 + 50,
    };
  
    try {
      const response = await axiosInstance.post(`orders`, data);
      if (response?.data?.success == true) {
        toast.success("Order placed successfully");
        dispatch(emptyCart([]));
        router.push("/order/my-order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order");
    }
  };
  

  return (
    <>
      <CustomerHeader />
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <h3 className="text-3xl font-bold text-center mb-8 mt-2">Order Details</h3>
        <div className="flex flex-col gap-2 ml-8 mb-4">
          <h3 className="text-2xl font-bold">User Details</h3>
          <div className="flex ml-16 gap-12">
            <div className="flex flex-col font-bold gap-3">
              <span>Name:</span>
              <span>Address:</span>
              <span>Mobile:</span>
            </div>
            <div className="flex flex-col text-yellow-500 font-bold gap-3">
              <span>{userData?.name}</span>
              <span>{userData?.address}</span>
              <span>{userData?.contact}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-8 mb-4">
          <h3 className="text-2xl font-bold">Amount Details</h3>
          <div className="flex ml-16 gap-12">
            <div className="flex flex-col font-bold gap-3">
              <span>Food Charges:</span>
              <span>Tax:</span>
              <span>Delivey Charge:</span>
              <span className="text-2xl font-bold border-t-4 border-black">
                Total Amount:
              </span>
            </div>
            <div className="flex flex-col text-yellow-500 font-bold gap-3">
              <span>Rs{getTotal().totalPrice}</span>
              <span>Rs{(getTotal().totalPrice / 100) * 10}</span>
              <span>Rs{50}</span>
              <span className="text-2xl font-bold border-t-4 border-black">
                Rs
                {getTotal().totalPrice +
                  (getTotal().totalPrice / 100) * 10 +
                  50}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-8 mb-4">
          <h3 className="text-2xl font-bold">Payment Details</h3>
          <div className="flex ml-16 gap-12">
            <div className="flex flex-col font-bold gap-3">
              <span>Cash On Delivery:</span>
            </div>
            <div className="flex flex-col text-yellow-500 font-bold gap-3">
              <span className="text-2xl font-bold">
                Rs
                {getTotal().totalPrice +
                  (getTotal().totalPrice / 100) * 10 +
                  50}
              </span>
            </div>
          </div>
        </div>
        <button onClick={()=>PlaceYourOrder()} className="py-2 px-8 rounded bg-green-500 mb-4">Place your order</button>
      </div>
    </>
  );
};

export default Order;
