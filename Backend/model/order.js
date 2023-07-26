const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({
    customername:{
        type:String
    },
    items:[{
        id:{
            type:String
        },
        name:{
            type:String
        },
        amount:{
            type:Number
        },
        price:{
            type:Number
        }
    }],
    totalAmount:{
        type:Number
    },
    address:[{
        city:{
            type:String
        },
        street:{
            type:String
        },
        homeNumber:{
            type:Number
        },
        postal:{
            type:Number
        }
    }]
},
   {timestamps:true}
)

module.exports = new mongoose.model("ordermodel",orderschema);