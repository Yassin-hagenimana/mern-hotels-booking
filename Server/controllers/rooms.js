import Rooms from "../Modals/Rooms.js"
import Hotels from "../Modals/Hotels.js"

export const createRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId
    const newRoom= new Rooms(req.body)

    try {
        const savedRoom=await newRoom.save()
        try {
            await Hotels.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}


export const updateRoom=async(req,res,next)=>{
    try {
        const updatedRoom= await Rooms.findByIdAndUpdate(req.params._id,
            {$set:req.body},
            {new:true}
            )
        res.status(200).json(updatedRoom)
    } catch (err) {
       next(err)
    }
}

export const deleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelId
    try {
        await Rooms.findByIdAndDelete(req.params._id)
        try {
            await Hotels.findByIdAndDelete(hotelId,{
                $pull:{rooms:req.params.id}})
        } catch (err) {
            next(err)
        }
         res.status(200).json("Room has been deleted")
     } catch (err) {
         next(err)
     }
}

export const getRoom=async(req,res,next)=>{
    try {
        const room= await Hotels.findById(req.params._id)
          res.status(200).json(room)
      } catch (err) {
          next(err)
      }
}

export const getRooms=async(req,res,next)=>{
    try {
        const rooms= await Rooms.find()
          res.status(200).json(rooms)
      } catch (err) {
          next(err)
      }
}