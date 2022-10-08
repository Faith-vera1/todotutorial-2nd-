const router = require("express").Router();

const post = require("../models/Todo")
// routes

router.post("/add/post", (req ,res) =>{
    const{ post } = req.body;
    

    
});

module.exports = router;