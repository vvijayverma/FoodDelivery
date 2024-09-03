import React from "react";
import { CardItem } from "@/app/components/ui/3d-card";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Item = ({id,name,image,price,description,restoId,userId}) => {
    const dispatch = useDispatch();

  return (
    <CardItem
      translateZ={20}
      as="button"
      className="px-4 py-2 rounded-xl bg-red-500 dark:bg-white dark:text-black text-white text-xs font-bold"
      onClick={() =>
        dispatch(
          addToCart({
            id,
            name,
            image,
            price,
            description,
            restoId,
            userId
          })
        )
      }
    >
      Add To Cart
    </CardItem>
  );
};

export default Item;
