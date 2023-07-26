const order = require("../model/order")

module.exports.allorderdetails = async(req,res) => {
    
    try {
         const address = {
            city:req.body.user.city,
            street:req.body.user.street,
            homeNumber:req.body.user.homeNumber,
            postal:req.body.user.postal
         }
        const userorder = new order({
            customername:req.body.user.name,
            items:req.body.orderedItems.items, 
            totalAmount:req.body.orderedItems.totalAmount,
            address:address
              })
        const orderdetails = await userorder.save();
        res.send({ message: "order submitt successfully", alert: true });
        
        } catch (error) {
            res.status(404).send(error);
            console.log(error);
        }
   
}

module.exports.fetchorder = async(req,res)=>{
    try {
        const orderdetails = await order.find();
        res.send({ message: "order fetch successfully", alert: true ,data:orderdetails });
    } catch (error) {
        res.status(404).send(error);
        console.log(error);
    }
    
}