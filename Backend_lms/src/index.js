const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 2664
app.use(express.json())

const connect=require("./configs/db")

const {register,login}=require("./controllers/auth.controller")
app.post("/register",register)
app.post ("/login",login)

const assignmentController=require("./controllers/assignment.controller")
const lectureController=require("./controllers/lecture.controller")

app.use("/assignments",assignmentController)
app.use("/lectures",lectureController)

app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2664")
    }catch(err){
        console.log(err.message)
    }
})