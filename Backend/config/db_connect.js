const mongoose = require('mongoose');
const { database } = require('./config');

const mongodb = async () => {
    try {
        mongoose.connect(database)
        .then(console.log("connection successfully"))
    }catch (error) {
        console.log(error);
    }
};
module.exports={mongodb};
