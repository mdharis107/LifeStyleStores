const express = require("express");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API Home Page, Try other route.");
});

// app.use("/student",studentRouter);



app.listen(8080,async ()=>{
    console.log("Listening on port 8080");
})

