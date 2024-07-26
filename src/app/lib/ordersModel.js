import mongoose from "mongoose"

const ordersModel = new mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    foodItemId:String,
    restoId:mongoose.Schema.Types.ObjectId,
    status:String,
    amount:String,
})

export const ordersSchema = mongoose.models.orders 
|| mongoose.model("orders",ordersModel)