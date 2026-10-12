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