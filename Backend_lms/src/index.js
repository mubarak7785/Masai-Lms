const express = require ("express")
const cors = require("cors")
const dotenv=require("dotenv")

const app = express()
app.use(cors())

app.use(express.json())

const connect=require("./configs/db")

const {register,login}=require("./controllers/auth.controller")
app.post("/register",register)
app.post ("/login",login)

const assignmentController=require("./controllers/assignment.controller")
const lectureController=require("./controllers/lecture.controller")

app.use("/assignments",assignmentController)
app.use("/lectures",lectureController)

dotenv.config({path:"./configs/config.env"})

connect()
app.listen((process.env.PORT || 2664),function (){
    console.log("Express server listening on port %d in %s mode",this.address().port,app.settings.env)

})