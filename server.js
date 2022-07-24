const express = require("express");
const app = express ();
const PORT = process.env.PORT || 8000;

// Initialize middleware
// we used to install body parser but now it's a built in middleware
// Function of express. It parses incoming JSONpayload
// app.use(express.json({extended:false}));
app.use(express.json({extended: false}));

// Test Rout
app.get("/", (req,res)=>res.send("Hello Aruna !!!"));


app.post("/", (req,res)=>res.send(`Hello ${req.body.name}`)); 
app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`))

app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`));
