const bcrypt = require('bcryptjs');
const reguser = require("../model/user");
const jwt = require("jsonwebtoken");
const {sk} = require("../config/config")

module.exports.addregisterdetails = async(req,res) => {
    
    try {
        let password=req.body.password;
         console.log(req.body);
        const dataofuser = await reguser.findOne({email:req.body.email});
        if(dataofuser)
        {
            return res.send({ message: "Email id is already register", alert: false });
        }
            const bpass = await bcrypt.hash(password,10);
            const regusers = new reguser({
            fname:req.body.fname, 
            lname:req.body.lname,   
            email:req.body.email,
            password:bpass,
        })

        const userdetails = await regusers.save();
        res.send({ message: "Successfully sign up", alert: true });
        
        } catch (error) {
            res.status(404).send(error);
        }
   
}

module.exports.userlogin = async (req,res) =>{
 try {
  const email = req.body.email;
  const pass = req.body.password;
  const dataofuser = await reguser.findOne({email:email});
  const isMatch = await bcrypt.compare(pass,dataofuser.password);
        const token = jwt.sign({_id:dataofuser._id.toString()},sk,{expiresIn:"3d"});
        if(isMatch==true && dataofuser.isAdmin==true){
            return res.json({message:"login successfully",data:token,alert:true,admin:true})
        }else if(isMatch){
            return res.json({message:"login successfully",data:token,alert:true})
        }else{
            return res.json({message:"somthing went wrong",alert:false})
        }
 } catch (error) {
      res.status(400).send(error);
 }
}