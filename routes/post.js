const router = require("express").Router();

const post = require("../models/Todo")
// routes

router.post("/add/post", (req ,res) =>{
    const{ post } = req.body;

    console.log(post);
});

module.exports = router;