const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 2664
app.use(express.json())

const connect=require("./configs/db")

app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2664")
    }catch(err){
        console.log(err.message)
    }
})