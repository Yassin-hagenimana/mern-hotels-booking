import express  from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel }
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
router.get("/find/:_id",getHotel)
//get all hotels
router.get("/",getHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)

export default router