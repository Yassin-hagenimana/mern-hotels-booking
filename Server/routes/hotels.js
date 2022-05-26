import express  from "express";
import Hotels from "../Modals/Hotels.js";
const router=express.Router()

//create
router.post("/",async(req,res)=>{
    const newHotel=new Hotels(req.body)
    try {
        const savedHotel=await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
       res.status(500).json(err) 
    }
})

//update
router.put("/:_id",async(req,res)=>{
    try {
        const updatedHotel= await Hotels.findByIdAndUpdate(req.params._id,
            {$set:req.body},
            {new:true}
            )
        res.status(200).json(updatedHotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete
router.delete("/:_id",async(req,res)=>{
    try {
       await Hotels.findByIdAndDelete(req.params._id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})


//get specific hotel
router.get("/:_id",async(req,res)=>{
    try {
      const hotel= await Hotels.findById(req.params._id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get all hotels
router.get("/",async(req,res,next)=>{
    try {
      const hotels= await Hotels.find()
        res.status(200).json(hotels)
    } catch (err) {
        res.status(500).json(err)
        next(err)
    }
})

export default router