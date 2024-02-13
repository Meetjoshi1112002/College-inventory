import { Student } from "../models/studentSchema.js";


const loginStudent = async(req,res)=>{

    const code = await validateUser(req.body);

    if(code === 0 ) {
        res.sendStatus(404);
        return;
    }
    if(code === -1) {
        res.sendStatus(504);
        return;
    }
 
    res.sendStatus(200);
}

const registerStudent = async(req,res)=>{

    const code = await checkUser(req.body.username);

    if(code === 1){
        await createStudent(req.body);
        res.sendStatus(200);
        return;
    }
    
    console.log("Username exits");
    res.sendStatus(200);


}

const checkUser = async (username)=>{
    const result = await Student.find({username:username});
    if(result.length === 0){
        return 1;
    }
    return 0;
}

const validateUser = async(obj)=>{
    const result = await Student.find({username:obj.username},{password:1});
    if(result.length === 0){
        // No username found
        return 0;
    }
    else{
        if(result[0].password === obj.password){
            // valid user
            return 1;
        }else{
            // invalid password
            return -1;
        }
    }
}

const createStudent = async(obj)=>{

    const student = new Student({
        username:obj.username,
        password:obj.password,
        departmentName:obj.department,
        currentSemester:obj.currentSemester
    })

    const result = await student.save();

    console.log(result);
}



export {loginStudent,registerStudent};