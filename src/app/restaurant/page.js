"use client";
import React, { useState } from "react";
import SignUp from "../_components/SignUp";
import Login from "../_components/Login";
import Header from "../_components/Header";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="">
      <Header />
      <div className="flex flex-col">
        {login ? (
          <Login setLogin={setLogin} login={login} />
        ) : (
          <SignUp setLogin={setLogin} login={login} />
        )}
      </div>
    </div>
  );
};

export default Restaurant;
