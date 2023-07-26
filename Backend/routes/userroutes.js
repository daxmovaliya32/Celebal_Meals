const express = require('express');
const routes = express.Router();
const registeruser = require("../controller/usercontroller");

routes.post("/login",registeruser.userlogin);

routes.post("/signup",registeruser.addregisterdetails);

module.exports=routes; 