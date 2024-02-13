import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    departmentName:{
        type:String,
        required:true
    }
    ,
    courseId:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'course',
        // required:true
    }
});

const Faculty = mongoose.model("faculty",facultySchema);
export {Faculty};