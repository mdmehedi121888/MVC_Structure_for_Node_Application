import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,"At least 3 characters to name"]
    },
   email:String,
    password:{
        type:String,
        minLength:[8,"password at least 8 characters"]
    }
});

export const User = mongoose.model("User",userSchema);