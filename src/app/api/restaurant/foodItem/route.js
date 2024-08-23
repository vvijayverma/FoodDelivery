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

export async function GET(request) {
  let success = false;
  await mongoose.connect(connectionStr);
  const result = await foodSchema.find();
  if (result.length > 0) {
      success = true;
  }

  return NextResponse.json({ result, success });
}

// export async function GET() {
//   await mongoose.connect(connectionStr);
//   const data = await restaurantSchema.find();
//   return NextResponse.json({ Result: true,data });
// }
