import express from "express"
import { registerStudent,loginStudent } from "../Controller/registerLoginStudent.js";

const router = express.Router();

router.post("/student/register",registerStudent);

router.post("/student/login",loginStudent);

export  {router};