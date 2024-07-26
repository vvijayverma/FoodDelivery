import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from '../../../lib/db';
import { restaurantSchema } from '../../../lib/restaurantsModel';
import { foodSchema } from '../../../lib/foodItemModel';


export async function GET(request,content){
    let id = content.params.id;
    await mongoose.connect(connectionStr);
    const result = await restaurantSchema.findOne({_id:id})
    const foodItems = await foodSchema.find({restoId:id})
    return NextResponse.json({success:true,result,foodItems})
}