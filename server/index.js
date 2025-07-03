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

app.get("/getusers", async(request, response) => {
    try {
        const result = await User.find();
        response.status(200).send({users : result});
    }
    catch(err){
        console.log(err);
    }
})

app.put("/updateuser/:id", async(request, response) => {
    const {name, message} = request.body;
    const id = request.params.id;
    try {
        await User.updateOne({_id: id}, {name, message});
        response.status(200).send({message: "User updated successfully"});
    }
    catch(err){
        console.log(err);
    }
})


app.delete("/deleteuser/:id", async(request, response) => {
    const id = request.params.id;
    try {
        await User.deleteOne({_id: id});
        response.status(200).send({message: "User deleted successfully"});
    }   
    catch(err){
        console.log(err);
    }
})





app.listen(2000, () => {
    console.log("Server Started");
})