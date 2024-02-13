import express from "express"
import { registerFaculty,loginFaculty } from "../Controller/registerLoginFaculty.js";

const router = express.Router();

router.post("/faculty/register",registerFaculty);

router.post("/faculty/login",loginFaculty);

export  {router};