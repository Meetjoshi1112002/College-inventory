import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    uploadDate:{
        type:String,
        required:true
    }
})

const Material = mongoose.model("material",materialSchema);

export {Material};