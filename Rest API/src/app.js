const mongoose = require("mongoose")
const express = require("express")
const app = express()

const PORT =3000;
const url = "mongodb+srv://Kaushal:Kaushal31@cluster0.0okhro7.mongodb.net/myapp?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("db is connected !!!");
})

app.use(express.json())
app.use("/",require("../router/studentrouter"))

app.listen(PORT,()=>{
    console.log("server runninng on port : " +PORT);
})