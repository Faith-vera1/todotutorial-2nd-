const express = require("express");
const bodyParser = require("body-parser");
const ejs= require ('ejs');
const mongoose = require("mongoose");

const Todo = require("./Models/Todo")




const app = express();

const port = process.env.PORT || 8000
mongoose.connect(
    `mongodb+srv://Todolist:todolist@happygirl.iawe6ah.mongodb.net/?retryWrites=true&w=majority`,

  ).then(data => console.log("Connected")).catch(err => console.log(err))


app.set('view engine',  "ejs")


// app.get('/creat', (req, res) => {
//     const TODO = new Todo({
//         todo: "bride price 5 hundern naria"
//     })

//     TODO.save().then(data => {
//         res.render('index',)
//     }).catch(err => {
//         console.log(err);
//     })


// })

app.get("/", (req,res) => {
    Todo.find().then( data => {
        console.log(data);
    res.render("index", {todo:data}) }).catch( err => {
        console.log(err);
    })

        
    })



app.listen(port, () => {
    console.log(`Backend server is running ${port}`);
})





// app.use("/", function(req,res){
//     res.sendFile(__dirName + routes/app)
// });

// app.use(express.urlencoded({ extended: true}));

// app.use( express.static("public"));

// app.set("view engine", "ejs")









// app.listen(8000, function(){
//     console.log("the  port is now running!");
// });