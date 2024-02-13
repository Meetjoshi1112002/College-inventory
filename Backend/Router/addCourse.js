import express from "express"
import { addCourse, getCourses } from "../Controller/addNewCourse.js";
const router = express.Router();

// add a new course
router.post("/addCourse",addCourse);

// Get courses of a particular dep -> sem
router.get("/:dep/:sem",getCourses);

// Get course by a particular professor
router.get("")
export {router};