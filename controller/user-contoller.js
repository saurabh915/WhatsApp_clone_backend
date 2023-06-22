import { response } from "express";
import User from "../model/User.js";


export const addUser = async(req,res)=>{
try {
    console.log(req.body);
  let exist = await  User.findOne({sub:req.body.sub})
if(exist){
    res.status(200).json({msg:'user already exist'})

    return;
}

const newUser = new User(req.body)
await newUser.save();
return res.status(200).json(newUser);

} catch (error) {
    return res.status(500).json(error)
}
}


export const getUsers = async(req,res)=>{
    try {
        let users = await  User.find({})
        console.log(users);

 
    return res.status(200).json(users);
    
    } catch (error) {
        return res.status(500).json(error)
    }
    }