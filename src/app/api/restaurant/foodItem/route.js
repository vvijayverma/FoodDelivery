import mongoose from "mongoose";
import { connectionStr } from "../../../lib/db";
import { foodSchema } from "../../../lib/foodItemModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success=false;
  mongoose.connect(connectionStr);
  const foodItem = new foodSchema(payload);
  const result = await foodItem.save();
 if(result){
    success = true;
 }
  return NextResponse.json({ result, success });
}
