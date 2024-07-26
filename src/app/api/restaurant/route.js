import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../../lib/db";
import { restaurantSchema } from "../../lib/restaurantsModel";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find();
  return NextResponse.json({ Result: true,data });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionStr);
  let result;
  let success = false;
  if (payload.login) {
    result = await restaurantSchema.findOne({email:payload.email,password:payload.password});
    // alert(result);
    if (result) {
        success = true;
    }
  } else {
    const restaurants = new restaurantSchema(payload);
     result = await restaurants.save();
     if (result) {
        success = true;
    }
  }

  return NextResponse.json({ result,success });
}
