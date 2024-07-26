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
      <div className="bg-gray-500 flex justify-center items-center flex-col gap-4">
        <h3 className="text-3xl font-bold text-center">Shopping Cart</h3>
        <div className="flex gap-4">
          <div>
            { cart?.map((item) => (
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
          {cart.length > 0 ? <Total /> : ""}
        </div>

        {cart.length <= 0 ? (
          <Link
            href={`/`}
            className="text-2xl font-bold bg-green-500 px-2 py-4 rounded"
          >
            Add Items
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartDetail;
