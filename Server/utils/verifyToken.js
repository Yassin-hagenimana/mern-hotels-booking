import  Jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
    return next(createError(401,"You are not authorized"))
    }
    Jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(createError(403,"token is not valid!"))
        req.user=user
        next()
    })
}

export const verifyUser=(req,res,next)=>{
  verifyToken(req,res,next,()=>{
      if(req.user._id === req.params._id || req.user.isAdmin){
          next()
      }else{
        if(err) return next(createError(403,"You re not Authorized!"))
      }
  })
}



export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
          if(err) return next(createError(403,"You re not Authorized!"))
        }
    })
  }