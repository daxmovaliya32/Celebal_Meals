require('dotenv').config()

let con={
    database:process.env.url,
    port:process.env.port,
    sk:process.env.sec_key
}

module.exports=con;