const {Router} = require("express");

const userRouter = Router();

userRouter.post("/user/signup",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

userRouter.post("/user/signin",function(req,res){
    res.json({
        message : "Signin endpoint"
    })
})

userRouter.post("/user/login",function(req,res){
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

})

userRouter.get("/user/purchases",function(req,res){
    res.json({
        message : "Signup endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter;
}