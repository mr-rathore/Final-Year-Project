
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const User= require("./models/usermessage")
// const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;
const app = express();
//database connection...
mongoose.connect("mongodb://localhost:27017/pizzaoceandb",{useNewUrlParser:true});
const db = mongoose.connection;
db.on("error", (error)=>{
  console.log("error");
});
db.once("open", ()=>{
  console.log("Connected to the Database");
});
//ejs adding
app.set("view engine", "ejs");
//adding path
const staticpath = path.join(__dirname, "../public");

//middleware
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
// app.use(express{useNewUrlParser.extended(true)})
//routing
app.get("/", function(req,res){
  res.render("index");
});
app.post("/ordered",async(req,res)=>{
  const db = new User(req.body);
db.save();
  res.render("index");
});


//server
app.listen(port, function(){
  console.log("The server is running at port ${port}");
});
