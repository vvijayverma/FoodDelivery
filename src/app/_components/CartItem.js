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
    <div className="flex gap-8 p-2 m-2 bg-white shadow-lg rounded-lg max-w-2xl justify-center items-center">
      <div className="relative w-[900px] h-80">
        <Image
          className="object-cover rounded-xl"
          src={image}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="flex flex-col justify-between w-full gap-4">
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-gray-600">{description}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-blue-500">
            <small className="text-gray-500">Rs</small>
            <strong>{price*quantity}</strong>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="p-2 text-lg bg-gray-200 rounded"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              className="p-2 text-lg bg-gray-200 rounded"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="self-start p-2 mt-4 text-sm text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
