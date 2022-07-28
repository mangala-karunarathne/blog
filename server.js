const express = require("express");
const app = express ();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;


// Initialize middleware
// we used to install body parser but now it's a built in middleware
// Function of express. It parses incoming JSONpayload
// app.use(express.json({extended:false}));
app.use(express.json({extended: false}));

// Test Routs
// app.get("/", (req,res)=>res.send("Hello Aruna !!!"));
// app.post("/", (req,res)=>res.send(`Hello ${req.body.name} `));
// app.get("/hello/:name", (req.res)=>res.send(`Hello ${req.params.name}`))

app.get('/api/articles/:name', async (req,res)=>{
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017')
        const db = client.db("mernblog")
        const articlesinfo = db.collection('articles').findOne({name: articleName})
        res.status(200).jason(articlesinfo)
        client.close();
    } catch (error) {
        res.status(500).jason({message: "Error connecting to database", error})
    }
    
});
app.post('/api/articles/:name/add-comments', (req,res)=>{
  const {username, text} = req.body;
  const articleName = req.params.name;
  articlesinfo[articleName].comments.push({username, text});
  res.status(200).send(articlesinfo[articleName]);
});

app.post("/", (req,res)=>res.send(`Hello ${req.body.name}`)); 
app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`))

app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`));
