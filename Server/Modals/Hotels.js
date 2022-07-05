import mongoose from "mongoose"
import {registerSchema} from "swaggiffy"
const HotelsSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String],
    },
    title:{
        type:String,
        required:true

    },

    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
},
{timestamps:true})

registerSchema("Hotels",HotelsSchema,{orm:'mongoose'})
export default mongoose.model("Hotels",HotelsSchema)