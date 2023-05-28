const express = require("express")
const router = express.Router()

const Student = require("../model/Student")

// Get :--

router.get("/students",async(req,res)=>{
    try {
        const data = await Student.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

module.exports=router

// Post :--

router.post("/students", async(req,res)=>{
    
    // console.log("post api calling");
    // console.log(req.body);
    try {
        
        const std = new Student(req.body)
        const insertData = await std.save();
        res.send(insertData)
    } catch (error) {
        console.log(error);
    }
})

// ID :- 

router.put("/students/:id",async(req,res)=>{

    try {
        const updatedData = await Student.findByIdAndUpdate(req.params.id,req.body) 
        res.send(updatedData)
    } catch (error) {
        console.log(error);
    }
})

router.delete("/students/:id",async(req,resp)=>{

    try {
       const deletedData =  await Student.findByIdAndDelete(req.params.id)
       resp.send(deletedData)
    } catch (error) {
        resp.send(error)
    }
})

// findById :-

router.get("/students/:id",async(req,resp)=>{

    try {
       const student =  await Student.findById(req.params.id)
       resp.send(student)
    } catch (error) {
        resp.send(error)
    }
})

module.exports=router