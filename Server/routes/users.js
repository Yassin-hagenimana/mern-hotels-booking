import express  from "express";
import {deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router=express.Router()

/** router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("You are logged in")
})
router.get("/checkuser/:_id",verifyUser,(req,res,next)=>{
    res.send("You are logged in and you can delete your account")
})

router.get("/checkadmin/:_id",verifyAdmin,(req,res,next)=>{
    res.send("You re admin,You are logged in and you can delete your account")
})
*/

router.put("/:_id",verifyUser,updateUser)
//delete
router.delete("/:_id",verifyUser,deleteUser)
//get specific User
router.get("/:_id",verifyUser,getUser)
//get all Users
router.get("/",verifyAdmin,getUsers)


export default router