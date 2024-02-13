import express from "express";
import bodyParser from "body-parser";
import { connectDatabase } from "./db/connection.js";
import { router as registerLoginStudent } from "./Router/registerLoginStudent.js";
import { router as addCourse } from "./Router/addCourse.js";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


await connectDatabase();


app.use("/",registerLoginStudent);
app.use("/",addCourse);

app.listen(3000,()=>{
  console.log("I am at port 3000");
})