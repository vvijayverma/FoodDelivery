"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/foodlogo.jpg";
import { useRouter, usePathname } from "next/navigation";
import SignUp from "./SignUp";
import Restaurant from "../restaurant/page";

import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../features/authSlice";
import MyOrders from "../order/my-order/page";

const CustomerHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cart } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.auth);
  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const logoutUser = () => {
    dispatch(userLogout());
    router.push("/user-auth");
  };
  return (
    <div className="flex justify-between px-4 py-2 items-center bg-gray-800 shadow-md">
      <div className="logo">
        <Link href={`/`} className="">
          <Image
            src={Logo}
            alt="Food Delivery"
            width={80}
            height={20}
            className="rounded-full"
          />
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-6">
        <li className="text-xl font-bold text-white">
          <Link href={`/`} className="">
            Home
          </Link>
        </li>
        {userData ? (
          <>
            <li className="text-xl font-bold text-white">
              <Link href={`/order/my-order`} className="">
                MyOrders
              </Link>
            </li>
            <li
              className="text-xl font-bold text-white cursor-pointer"
              onClick={() => logoutUser()}
            >
              Logout
            </li>
          </>
        ) : (
          <li className="text-xl font-bold text-white">
            <Link href={`/user-auth`} className="">
              Login/SignUp
            </Link>
          </li>
        )}
        <li className="text-xl font-bold text-white">
          <Link href={`/explore/cartDetails`} className="">
            Cart ({getTotalQuantity() || 0})
          </Link>
        </li>
        <li className="text-xl font-bold text-white">
          <Link href={`/restaurant/dashboard`} className="">
            Add Restaurant
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;
