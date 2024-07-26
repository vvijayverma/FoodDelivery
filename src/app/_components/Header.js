"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/foodlogo.jpg";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [details, setDetails] = useState();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
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
        {details && details.name ? (
          <>
            {/* <li className="text-xl font-bold text-white">
              <Link href={`/`} className="">
                Profile
              </Link>
            </li> */}
            <li className="text-xl font-bold text-white cursor-pointer">
              <button className="" onClick={() => Logout()}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="text-xl font-bold text-white">
            <Link href={`/restaurant`} className="">
              Login/SignUp
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
