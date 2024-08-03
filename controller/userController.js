import { json } from "express";
import { User } from "../models/userSchema.js";

export const register = async (req,res,next)=>{

const {name,email,password} = req.body;
// console.log(name,email,password);

if(!name || !email || !password){
    return next(res.status(400).json({
        success:false,
        message:"Please fill up the form",
    }))
}

const isUser = await User.findOne({email});

if(isUser){
    return next(res.status(400).json({
        success:false,
        message:"User is Already Exists!",
    }))
}

const user  = await User.create({name,email,password});

if(user){
    return next(res.status(200).json({
        success:true,
        message:"User Registered!",
        user
    }))
}

}

export const  logIn = async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return next(res.status(400).json({
            success:false,
            message:"Email or Password is missing !!"
        }))
    }
    const user = await User.findOne({email});
    if(!user){
        return next(res.status(400).json({
            success:false,
            message:"Failed to LogIn!",
        }))
    }
        return next(res.status(200).json({
            success:true,
            message:"Successfully LogIn!",
            user
        }))
    
}

export const deleteUser = async (req,res,next)=>{
    const{id}=req.params;
    console.log(`the id : ${id}`);
    const findId = await User.findByIdAndDelete(id);
    if(!findId){
        return next(res.status(400).json({
            success:false,
            message:"User is not found!!"
        }))
    }
    return next(res.status(200).json({
        success:true,
        message:"Successfully Deleted the user !!"
    }))
}

export const updateUser = async(req,res,next)=>{
    const {id} = req.params;
    const getId = await User.findById(id);
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return next(res.status(400).json({
            success:false,
            message:"Please fill up the form",
        }))
    }
    
    const user = await User.findByIdAndUpdate(id,{name,email,password});
    if(!user){
        return next(res.status(400).json({
            success:false,
            message:"something is wrong when update the user"
        }))
    }
    return next(res.status(200).json({
        success:true,
        message:"Successfully update the user"
    }))
}

export const getUser = async (req,res,next)=>{
    

    try {

        const {id} = req.params;
        const user = await User.findById(id);
        console.log({id})

        return next(res.status(200).json({
            success:true,
            message:`Found the User`,
            user
            
        }))
        
    } catch (error) {
        return next(res.status(400).json({
            success:false,
            message:"user is not found" + error
        }))
    }
    
}

export const errorHandle = async (req,res,next)=>{
    return next(res.status(404).json({
        success:false,
        message:"This is an invalid URL,  Plz Provide valid URL"
    }))
}