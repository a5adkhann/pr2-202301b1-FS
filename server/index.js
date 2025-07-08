const express = require("express");
const User = require("./models/userModel");
const Registeration = require("./models/registerationModel");
const connectDB = require("./config/db_connection");
const cors = require("cors");
const bcrypt = require("bcrypt");

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

app.post("/register", async(request, response) => {
    const {fullName, email, password} = request.body;
    try{
        const hashPassword = await bcrypt.hash(password, 10);
        await Registeration.insertOne({fullName, email, password: hashPassword});
        response.status(200).send({message: "Registered Successfully"});
    }
    catch(err){

    }
})

app.post("/login", async(request, response) => {
    const {email, password} = request.body;
    try {
        const registeredUser = await Registeration.findOne({email: email}); 
        if(registeredUser){
            const isMatch = await bcrypt.compare(password, registeredUser.password);
            if(isMatch){
                response.status(200).send({message: "Logged in Successfully", registeredUser});
            }
            else {
                response.status(200).send({message: "Incorrect Credentials"});
            }
        }   
        else {
            response.status(200).send({message: "User don't exist"});
        }                                                    
    }
    catch(err){
        console.log(err);
    }
})



app.listen(2000, () => {
    console.log("Server Started");
})