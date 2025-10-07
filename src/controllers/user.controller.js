import { json } from 'express';
import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';


const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message:"ok",
  })
  //steps for user registration
   // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
  const {fullName,email,username,password} = req.body;
 if ([fullName,email,username,password].some(field =>(field?.trim()===""|| !field))){throw new ApiError(400,"All fields are required")}
 const existedUser=User.findOne({$or:[{email},{username}]})
  if(existedUser) {throw new ApiError(409,"User already exists with same email or username")}
  
  
  console.log("email:",email);
})
  


export {registerUser};