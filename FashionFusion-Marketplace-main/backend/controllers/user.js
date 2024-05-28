import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import cookie from 'cookie-parser';


//& Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Invalid credentials: Email password are required.",
        success: false,
      });
    }

    const user = await User.findOne({ email }); //~ find email in database

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
        success: false,
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid email or password.",
            success: false,
        });
    }

    const tokenData = {
        id : user._id,
    }
    const token = await jwt.sign(tokenData , process.env.JWT_SECRET , {expiresIn : "1d"});

    const userResponse = {
      _id : user._id,
      name : user.name,
      email : user.email
    }

    return res.status(200).cookie("token" , token , {httpOnly : true}).json({
      message : `Welcome ${user.name} on FashionFusion`,
      success : true,
      user : userResponse,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : "Internal Server error",
      success : false,
    })
  }
};

//& Logout

export const Logout = async (req , res) =>{
  return res.status(200).cookie("token" , "", {expiresIn : new Date (Date.now()) , httpOnly:true}).json({
    message: "Logged out successfully",
    success: true
  });
};


//& Register
export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Invalid credentials: Name, email, and password are required.",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email }); //~ find email in database

    if (existingUser) {
      return res.status(401).json({
        message: "email already used",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created succesfully! Please login",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
