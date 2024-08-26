import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../features/cartSlice";

const CartItem = ({
  key,
  id,
  name,
  quantity,
  image,
  price,
  restoId,
  userId,
  description,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="border-b-2 p-2 m-4 gap-4 flex justify-between items-center shadow-lg shadow-slate-500 rounded-md ">
      <div className="relative w-[300px] h-40">
        <Image
          className="object-cover rounded-xl"
          src={image}
          alt={name}
          layout="fill"
          // objectFit="contain"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-lg font-semibold text-blue-500">
            <small className="text-gray-500">Rs</small>
            <strong>{price*quantity}</strong>
          </p>
          <div className="flex items-center gap-4">
            <button
              className="px-1 text-lg bg-gray-200 rounded"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              className="px-1 text-lg bg-gray-200 rounded"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="p-2 mt-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
