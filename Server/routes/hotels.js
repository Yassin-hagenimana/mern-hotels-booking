import express  from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel }
 from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router()

//create
router.post("/",verifyAdmin,createHotel)
//update
router.put("/:_id",verifyAdmin,updateHotel)
//delete
router.delete("/:_id",verifyAdmin,deleteHotel)
//get specific hotel
router.get("/:_id",getHotel)
//get all hotels
router.get("/",getHotels)


export default router