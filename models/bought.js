import mongoose, { Schema } from "mongoose";

const boughtSchema = new Schema(
    { name:String, address:String, city:String ,surname:String,postalCode:String,cartItems:Object},
  { timestamps: true }
);

/**
 * i am Creating a model for My database {model():is like seItems on localStorage} ,which is the container of all the Boughts
 * I store everything on Bought
 */
const Bought = mongoose.models.Bought  || mongoose.model("Bought", boughtSchema);


export default Bought