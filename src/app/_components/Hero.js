import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="py-12">
        <h1 className="font-bold text-4xl">
          Every thing <br/>
          is better<br/>
          with a&nbsp;
          <span className="text-primary">pizza</span></h1>
        <p className="py-4 text-gray-500 text-sm">
          Pizza is a universally loved dish featuring a golden, crispy crust
          topped with melted cheese, rich tomato sauce, and an array of
          flavorful toppings like pepperoni, veggies, or mushrooms. Its
          irresistible combination of textures and tastes makes it a favorite.
        </p>
        <div className="flex items-center gap-4">
            <button className="text-white flex gap-2 items-center uppercase px-4 py-2 rounded-full bg-primary">Order now
              <CircleArrowRight className="h-6 w-6"/>
            </button>
            <button className="flex gap-2 items-center px-4 py-2 rounded-full">Learn more
              <CircleArrowRight className="h-6 w-6"/>
            </button>
        </div>
      </div>
      <div className="relative rounded-full">
        <Image
          src="/pizza.png"
          alt="Pizza"
          // layout={"fill"}
          // objectFit={"contain"}
          width={400}
          height={400}
          className="rotate-pizza rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
