const express = require('express');
const routes = express.Router();
const userorder = require("../controller/ordercontroller");

routes.post("/order",userorder.allorderdetails);

routes.get("/fetchorders",userorder.fetchorder)

module.exports=routes; 