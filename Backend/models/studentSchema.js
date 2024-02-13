import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    departmentName:{
        type:String,
        required:true
    },
    currentSemester:{
        type:Number,
        required:true
    }
});

const Student = mongoose.model("student",studentSchema);
export {Student};