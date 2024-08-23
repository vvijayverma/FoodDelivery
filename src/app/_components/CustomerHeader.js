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
    <>
      <header className="flex justify-between items-center">
      <Link href={`/`} className="text-primary font-bold text-2xl">
      <Image
        src={Logo}
        alt="Food Delivery"
        width={80}
        height={20}
        className="rounded-full"
      />
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
          <Link href={`/`} className="">
            Home
          </Link>
        {userData ? (
          <>
              <Link href={`/order/my-order`} className="">
                MyOrders
              </Link>
            <li
              className="cursor-pointer list-none"
              onClick={() => logoutUser()}
            >
              Logout
            </li>
          </>
        ) : (
            <Link href={`/user-auth`} className="">
              Login/SignUp
            </Link>
        )}
          <Link href={`/explore/cartDetails`} className="">
            Cart ({getTotalQuantity() || 0})
          </Link>
          <Link href={`/restaurant/dashboard`} className="">
            Add Restaurant
          </Link>
      </nav>
    </header>
    </>
  );
};

export default CustomerHeader;
