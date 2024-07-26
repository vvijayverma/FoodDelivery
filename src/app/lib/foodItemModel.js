const { default: mongoose } = require("mongoose");


const foodItemModel = new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    restoId:mongoose.Schema.Types.ObjectId
});
export const foodSchema = mongoose.models.foodItems || mongoose.model("foodItems",foodItemModel);