const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://asadkaptech:01b1pass@cluster0.pv2rdhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;