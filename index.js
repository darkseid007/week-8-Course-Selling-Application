const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

// const jwt = require("jsonwebtoken");
// const JWT_SECRET = "S#C$ET";
// const bcrypt = require("brcrypt");
// const {z} = require("zod");
// const mongoose = require("mongoDB");

const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);



app.post("/user/signup",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

app.post("/user/signin",function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

app.post("/user/login",function(req,res){
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

})

app.get("/user/purchases",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

app.get("/course/purchase",function(req,res){
    //you would expect the user to pay you money
    res.json({
        message : "Signup endpoint"
    })
})

app.get("/course",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

app.listen(3000);