const express = require('express');
const app = express();
app.set('view engine','ejs')

const port = 3000;

app.get('/',(req,res)=>{
    // console.log("Hi");
    // res.status(500).send("error occured")
    // res.status(200).send({error:"Error Occured"})
    // res.json({express:"Learning express"})
       res.send("Hello World");
    // es.render("index.ejs",{text:"The Earth"}) //Express searches in the views file in default
});

// app.get("/user:",(req,res)=>{
//     res.send("User Information"); // The link should be exact to get the required output
// });

// app.get("/user/user1",(req,res)=>{
//     res.send("My Information");
// });

const userRoute = require('./Routes/user');
app.use('/user',userRoute);

app.listen(port);