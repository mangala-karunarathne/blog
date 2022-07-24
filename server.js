const express = require("express");
const app = express ();
const PORT = process.env.PORT || 8000;

const articlesinfo = {
    "learn-react":{
        comments: [],
    },
    "learn-node":{
        comments: [],
    },
    "my-thoughts-on-learning-reacts":{
        comments: [],
    },
};

// Initialize middleware
// we used to install body parser but now it's a built in middleware
// Function of express. It parses incoming JSONpayload
// app.use(express.json({extended:false}));
app.use(express.json({extended: false}));

// Test Routs
// app.get("/", (req,res)=>res.send("Hello Aruna !!!"));
// app.post("/", (req,res)=>res.send(`Hello ${req.body.name} `));
// app.get("/hello/:name", (req.res)=>res.send(`Hello ${req.params.name}`))
app.post('/api/articles/:name/add-comments', (req,res)=>{
  const {username, text} = req.body;
  const articleName = req.params.name;
  articlesinfo[articleName].comments.push({username, text});
  res.status(200).send(articlesinfo[articleName]);
});

app.post("/", (req,res)=>res.send(`Hello ${req.body.name}`)); 
app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`))

app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`));
