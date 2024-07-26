import mongoose from "mongoose";
import { connectionStr } from '../../lib/db';
import { restaurantSchema } from '../../lib/restaurantsModel';
import { NextResponse } from "next/server";


 export async function GET(request){
   let queryParams = request.nextUrl.searchParams;
   let filter={}
   if (queryParams.get("location")) {
     filter.city = queryParams.get("location");
    //  filter={city:{$regex:new RexExp(city,'i')}}
   }else if (queryParams.get("restaurant")) {
    filter.name = queryParams.get("restaurant");
   }
   await mongoose.connect(connectionStr);
   let result = await restaurantSchema.find(filter);
      return NextResponse.json({result,success:true})
 }