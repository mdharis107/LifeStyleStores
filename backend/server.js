const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello people, Here you will get all Data related to LifeStyleStore");
})

app.listen(8080,()=>{
    console.log("BACKEND IS LISTENING ON PORT 8080");
})