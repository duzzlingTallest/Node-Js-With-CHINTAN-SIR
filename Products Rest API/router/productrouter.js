const express = require('express');
const router = express.Router(); //??

const Product = require('../model/Product');
const Student = require('../../Rest API/model/Student');

// Get :-->

router.get('/products', async (req, res) => {
  try {
    const data = await Product.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

// Post :-->

router.post('/products', async (req, res) => {
  // console.log("POST API is Calling");
  // console.log(req.body); //??

  try {
    const pro = new Product(req.body);
    const insertData = await pro.save();
    res.send(insertData);
  } catch (error) {
    res.send(error);
  }
});

// ID / findByIdAndUpdate :-->

router.put('/products/:id', async (req, res) => {
  try {
    const updatedData = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(updatedData);
  } catch (error) {
    res.send(error);
  }
});

// Delete / findByIdAndDelete :-->

router.delete("/products/:id", async (req, res) => {
    try {
        const deletedData =  await Product.findByIdAndDelete(req.params.id)
        res.send(deletedData)
     } catch (error) {
         res.send(error)
     }
 })

 //findById :-->

 router.get("/products/:id",async(req,res)=>{
    try {
        const prod = await Product.findById(req.params.id)
        res.send(prod)
    } catch (error) {
        res.send(error)
    }
 })

module.exports = router;
