import express  from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router()

//create
router.post("/:hotelId",verifyAdmin,createRoom)
//update
router.put("/:_id",verifyAdmin,updateRoom)
//delete
router.delete("/:_id/:hotelId",verifyAdmin,deleteRoom)
//get specific hotel
router.get("/:_id",getRoom)
//get all hotels
router.get("/",getRooms)


export default router