"use client"
import React,{useState} from 'react';
import CustomerHeader from '../_components/CustomerHeader';
import UserSignUp from '../_components/UserSignUp';
import UserLogin from '../_components/userLogin';

const UserAuth = (props) => {
  const [login, setLogin] = useState(props?.searchParams?.register? false:true);
  // console.log(props);
  
  return (
    <div className="">
        <CustomerHeader/>
        <div className="flex flex-col">
        {login ? <UserLogin redirect={props?.searchParams} setLogin={setLogin} login={login}/> 
        : 
        <UserSignUp redirect={props?.searchParams}setLogin={setLogin} login={login}/>}
        </div>
    </div>
  )
}

export default UserAuth;