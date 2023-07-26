const express = require("express");
const app = express();
const cors = require("cors");
const {port} = require("./config/config")
const mon =require("./config/db_connect")
var fileUpload = require("express-fileupload")
require("./config/config");
mon.mongodb();

const corsOrigin ={
    origin:['http://localhost:3000'],//or whatever port your frontend is using
    headers:["Content-Type"],
    credentials:true,            
    optionSuccessStatus:200
  }
  app.use(cors(corsOrigin));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload())

const reg = require("./routes/userroutes");
app.use("/user",reg); //for user register and login

const order = require("./routes/orderroutes")
app.use("/user",order)

app.listen(port,(error)=>{
    if(error){
      console.log(error);
    }
    console.log(`server running on ${port}`);
})