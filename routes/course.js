const {Router} = require("express");

const courseRouter = Router();


courseRouter.get("/purchase",function(req,res){
    //you would expect the user to pay you money
    res.json({
        message : "Signup endpoint"
    })
})

courseRouter.get("/bulk",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}