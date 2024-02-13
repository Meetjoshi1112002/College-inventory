import { Course } from "../models/courseSchema.js";

const addCourse = async(req,res)=>{
    const course = new Course(req.body);
    const result = await course.save();
    console.log(result);
    res.sendStatus(200);
}

const getCourses = async (req,res)=>{
    const sem = parseInt(req.params.sem);
    const dep = req.params.dep;
    const result = await Course.find({departmentName:dep,semester:sem});
    console.log(result);
    res.json(result);
}

export {addCourse,getCourses}