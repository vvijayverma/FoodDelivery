import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:false,
        userData:null
    },
    reducers:{
        userSignUp:(state,action)=>{
           state.isAuthenticated = true;
           state.userData = action.payload;
        },
        userLogout:(state,action)=>{
            state.isAuthenticated = false;
            state.userData = null;
         },
    },
});

export const {userSignUp,userLogout}=authSlice.actions;
export default authSlice.reducer;