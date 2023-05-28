const mongoose = require('mongoose');
const express = require('express');
const app = express();

const PORT = 7777;
const url =
  'mongodb+srv://Kaushal:Kaushal31@cluster0.0okhro7.mongodb.net/myapp?retryWrites=true&w=majority';

mongoose.connect(url).then(() => {
  console.log('DB Is Connected....');
});

app.use(express.json())
app.use("/", require("../router/productrouter"))

app.listen(PORT, () => {
  console.log('Server Is Running On PORT :-' + PORT);
});
