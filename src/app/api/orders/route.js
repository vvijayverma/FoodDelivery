import mongoose from "mongoose";
import { connectionStr } from '../../lib/db';
import { ordersSchema } from "../../lib/ordersModel";
import { NextResponse } from "next/server";
import { restaurantSchema } from "@/app/lib/restaurantsModel";


export async function POST(request){
    const payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr);
    const order = new ordersSchema(payload);
    const result = await order.save();
    if (result) {
        success = true;
    }
    return NextResponse.json({result,success});
}

export async function GET(request){
    const userId = request.nextUrl.searchParams.get("id");
    let success = false;
    await mongoose.connect(connectionStr);
    let result = await ordersSchema.find({userId:userId});
    if (result) {
        let restoData = await Promise.all(
            result.map(async(item)=>{
                let restoInfo = {};
                restoInfo.data = await restaurantSchema.findOne({_id:item.restoId})
                restoInfo.amount = item.amount;
                restoInfo.status = item.status;
                return restoInfo;
            })
        )
        result = restoData;
        success = true;
    }
     return NextResponse.json({result,success})
}