const mongoose = require("mongoose");

const registerationModel = new mongoose.Schema({
    fullname : String,
    email : String,
    password : String
})

module.exports = mongoose.model("Registeration", registerationModel);