const express = require("express");
const User = require("./models/userModel");
const connectDB = require("./config/db_connection");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/adduser", async(request, response) => {
    const { name, message } = request.body;
    try {
        await User.insertOne({name, message});
        response.status(200).send({message: "User added successfully"});
    }   
    catch(err){
        console.log(err);
    }

})
app.listen(2000, () => {
    console.log("Server Started");
})