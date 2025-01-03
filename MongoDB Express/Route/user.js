const express = require('express');
let router = express.Router();

router.get("/",(req,res)=>{
    res.send("User Information"); // The link should be exact to get the required output
});

router.get("/user1",(req,res)=>{
    res.send("My Information");
});

router.post("/createUser",(req,res)=>{  
    res.send("Add new user");
});

router.route('/:id')
      .get((req,res)=>{
        res.send("Retrive the value "+req.params.id);
      })
      .put((req,res)=>{
        res.send("Update the value "+req.params.id);
      })
      .delete((req,res)=>{
        res.send("Delete the value "+req.params.id);
      });

// router.get("/usera/:id",(req,res)=>{  // Colen is used to pass parameters
//     res.send("Id value is "+req.params.id);
// });

// router.put("/usera/:id",(req,res)=>{  
//     res.send("Update this Id "+req.params.id);
// });

// router.delete("/usera/:id",(req,res)=>{  
//     res.send("Delete this Id "+req.params.id);
// });

const users = [{name:"Raja"},{name:"Rani"},{name:"Mandhiri"}]; //Middlewares is used to get data, until the data is fetched,
//  it will not update and keeps on loading.

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery = users[id];
    next();
})

module.exports = router;