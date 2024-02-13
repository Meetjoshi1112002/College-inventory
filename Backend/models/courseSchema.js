import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    courseCode:{
        type:String,
        unique:true,
        required:true
    },

    courseName:{
        type:String,
        required:true
    },
    
    semester:{
        type:Number,
        required:true
    },

    departmentName:{
        type:String,
        required:true
    },

    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'faculty'
    },
    material:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'material'
    }
})

const Course = mongoose.model("course",courseSchema);

export {Course}