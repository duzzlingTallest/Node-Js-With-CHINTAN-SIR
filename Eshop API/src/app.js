const mongoose= require("mongoose")
const express= require("express")
const app = express()

const PORT = 1111;
const url = 'mongodb+srv://Kaushal:Kaushal31@cluster0.0okhro7.mongodb.net/myapp?retryWrites=true&w=majority';

mongoose.connect(url).then(()=>{
    console.log("DB Is Connected....");
})

app.use(express.json())
app.use("/",require("../router/userrouter"))
app.use("/",require("../router/categoryrouter"))
app.use("/",require("../router/productrouter"))
app.use("/",require("../router/cartrouter"))

app.listen(PORT,()=>{
    console.log("server is running on port : "+PORT);
})
