import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
    name:"update",
    initialState:{
        updateFoodItem:null
    },
    reducers:{
        UpdateFoodItem:(state,action)=>{
           state.updateFoodItem = action.payload;
        }
    },
});

export const {UpdateFoodItem}=updateSlice.actions;
export default updateSlice.reducer;