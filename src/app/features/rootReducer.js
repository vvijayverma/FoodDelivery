import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import updateReducer from './updateSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    update:updateReducer
  });
export default rootReducer;