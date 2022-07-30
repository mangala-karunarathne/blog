const express = require("express");
const res = require("express/lib/response");
const app = express ();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;


// Initialize middleware
// we used to install body parser but now it's a built in middleware
// Function of express. It parses incoming JSONpayload
// app.use(express.json({extended:false}));
app.use(express.json({extended: false}));

const withDB = async(operations, res) => {
    try {
        console.log("Teset 1")
        const client = await MongoClient.connect("mongodb://localhost:27017")
        const db = client.db("mernblog");
        // const client = await MongoClient.connect("mongodb://localhost:27017");
        // const db = client.db("mernblog");
        await operations(db);
        client.close();
        console.log("Teset 1")
    } catch (error) {
        res.status(500).json({message: "Error connecting to database", error});
        // console.log(client)
        // console.log(db)
        console.log("Teset 2")
    }
};

// Test Routs
// app.get("/", (req,res)=>res.send("Hello Aruna !!!"));
// app.post("/", (req,res)=>res.send(`Hello ${req.body.name} `));
// app.get("/hello/:name", (req.res)=>res.send(`Hello ${req.params.name}`))

app.get("/api/articles/:name", async (req,res)=>{
            withDB(async(db)=>{
                const articleName = req.params.name;
                const articlesInfo = await db
                .collection("articles")
                .findOne({name: articleName});
            res.status(200).json(articleInfo);
            },res)
            
    });
  
app.post("/api/articles/:name/add-comments", (req,res)=>{
  const {username, text} = req.body;
  const articleName = req.params.name;
   
  withDB(async(db)=>{
    const articleInfo = await db
                .collection("articles")
                .findOne({name: articleName});
    await db.collection("articles").updateOne(
        { name: articleName },
        {
            $set: {
                comments: articlesInfo.comments.contact({ username, text})
            },
        }
    );
    const updateArticlesInfo = await db.collection("articles").findOne({name:articleName})
    res.status(200).json(updateArticleInfo);
  },res);
});

// app.post("/", (req,res)=>res.send(`Hello ${req.body.name}`)); 
// app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`))

app.listen(PORT, ()=> console.log(`Server is running at port: ${PORT}`));
