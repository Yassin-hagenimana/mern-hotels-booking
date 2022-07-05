import express  from "express";
import {registerDefinition} from "swaggiffy"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router()

//create
router.post("/:hotelId",verifyAdmin,createRoom)
//update
router.put("/:_id",verifyAdmin,updateRoom)
router.put("/availability/:_id",updateRoomAvailability)
//delete
router.delete("/:_id/:hotelId",verifyAdmin,deleteRoom)
//get specific room
router.get("/:_id",getRoom)
//get all rooms
router.get("/",getRooms)
registerDefinition(router,{tags:'Rooms',mappedSchema:'Room',basePath:'/api/rooms'})


export default router