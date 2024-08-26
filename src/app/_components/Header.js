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
        <Link href={`/`}>Home</Link>
        {details && details.name ? (
          <>
            <li className="cursor-pointer list-none">
              <button className="" onClick={() => Logout()}>
                Logout
              </button>
            </li>
          </>
        ) : (
            <Link href={`/restaurant`} className="">
              Login/SignUp
            </Link>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;
