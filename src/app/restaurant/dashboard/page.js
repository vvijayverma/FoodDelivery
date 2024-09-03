"use client"
import React, { useState } from 'react';
import AddItem from '../../_components/AddFoodItem';
import FoodItemList from '../../_components/FoodItemList';
import Header from '../../_components/Header';
import Footer from '../../_components/Footer';

const Dashboard = () => {
  const [addItem,setAddItem]=useState(true);
  return (
    <>
    <Header/>
    <div className=''>
      <div className=''>
      <button onClick={()=>setAddItem(true)} className={`px-4 py-2 bg-gray-500 mt-2 mx-2 rounded text-white font-bold ${addItem ? "bg-lime-400" : "bg-gray-500"}`}>Add Item</button>
      <button onClick={()=>setAddItem(false)} className={`px-4 py-2 bg-gray-500 mt-2 mx-2 rounded text-white font-bold ${addItem ? "bg-gray-500" : "bg-lime-400"}`}>Dashboard</button>
      </div>
      {addItem?<AddItem setAddItem={setAddItem}/>:<FoodItemList setAddItem={setAddItem}/>}
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Dashboard;