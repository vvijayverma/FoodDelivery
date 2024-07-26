import mongoose from "mongoose";
import { connectionStr } from '../../../../lib/db';
import { foodSchema } from '../../../../lib/foodItemModel';
import { NextResponse } from "next/server";


export async function GET(request,content){
    const id = content.params.id;
    let success = false;
    await mongoose.connect(connectionStr);
    const result = await foodSchema.find({restoId:id});
    if(result){
        success = true;
    }
    return NextResponse.json({result,success})
}

export async function DELETE(request,content){
    let id = content.params.id;
    let success = false;
    await mongoose.connect(connectionStr);
    let result = await foodSchema.deleteOne({_id:id});
    if (result) {
        success = true;
    }
    return NextResponse.json({result,success});
}

export async function PUT(request,content){
    let id = content.params.id;
    let success = false;
    let payload = await request.json();
    await mongoose.connect(connectionStr);
    const result = await foodSchema.findOneAndUpdate({_id:id},payload);
    if (result) {
        success = true;
    }
    return NextResponse.json({result,success});
}