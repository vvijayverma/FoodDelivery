"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../_components/CartItem";
import Total from "../../_components/Total";
import Link from "next/link";
import CustomerHeader from "@/app/_components/CustomerHeader";

const CartDetail = () => {
  const { cart } = useSelector((state) => state?.cart);
  const { userData } = useSelector((state) => state?.auth);
  return (
    <>
      <CustomerHeader />
      <h3 className="text-3xl font-bold text-center">Shopping Cart</h3>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 ">
        {/* <div className="flex gap-4"> */}
        <div className={``}>
          {/* <div className="flex"> */}
          {cart?.map((item) => (
            <React.Fragment key={item.id}>
              <CartItem
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                description={item.description}
                restoId={item.restoId}
              />
            </React.Fragment>
          ))}
        </div>
        {cart.length > 0 ? <Total /> : null}
      </div>
      {cart.length <= 0 ? (
          <div className="flex flex-col justify-center items-center">
            <p>Your Cart is Empty</p>
            <Link
              href={`/`}
              className="text-xl font-bold bg-green-500 px-2 py-2 rounded"
            >
              Add Items
            </Link>
          </div>
        ) : (
          ""
        )}
    </>
  );
};

export default CartDetail;
