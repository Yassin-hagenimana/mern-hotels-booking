import mongoose from "mongoose"
import {registerSchema} from "swaggiffy"
const RoomSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unAvailableDates:{type:[Date]}}]
},
{timestamps:true}

)
registerSchema("Room",RoomSchema,{orm:'mongoose'})
export default mongoose.model("Room",RoomSchema)