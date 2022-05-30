import mongoose from "mongoose"
const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'Please add a valid email',
          ],
    },
    country:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    phone:{
         type:String,
         required:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}

)

export default mongoose.model("User",UserSchema)