const express = require('express');

const {connection} = require("./config/db");

const {womensRouter} = require("./Routes/womens.router");

const app = express();
app.use(express.json());

// require("dotenv").config();
// let PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Hey people, THERE YOU WILL FIND ALL THE ROUTES FOR LIFESTYLE WEBSITE.");
});

app.use("/womens",womensRouter);


app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("Your mongo DataBase is Connected");
    }catch(err){
        console.log(err)
    }
    console.log("Listening on port 8080");
})

