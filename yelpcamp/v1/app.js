var express = require("express");
var bodyParser=require("body-parser");
var app=express();
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    //res.send("This will be the landing page!");
    res.render("landing");
});

//SCHEMA SET UP

var campgroundSchema=new mongoose.Schema({
   name: String,
   image: String,
   description:String
});

var Campground=mongoose.model("Campground",campgroundSchema);


//   Campground.create(
//     {
//   name:"Golden Trail",
//   image:"https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=xo0RuR6u",
//   description:"This is my campground"
// },function(error, campground){
//     if(error){
//     console.log(error);
//     console.log("Error!!!");
//     }
//     else{
//         console.log("Campground Created!");
//         console.log(campground);
       
//     }
// });
//INDEX ROUTE    
app.get("/campgrounds", function(req,res){
    var camp=Campground.find({},function(err,camp){
        if(err){
            console.log(err);
        }
        else{
            res.render("index",{camp:camp})
        }
    });
  
});
//NEW ROUTE
app.get("/campgrounds/new", function(req, res) {
  
    res.render("new.ejs");
});
//CREATE ROUTE
app.post("/campgrounds", function(req,res) {
    // body...
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.desc;
    var newCamp={name: name, image:image}
    Campground.create(
    {
  name:name,
  image:image,
  description:desc
},function(error, campground){
    if(error){
    console.log(error);
    console.log("Error!!!");
    }
    else{
        console.log("Campground Created!");
        console.log(campground);
        res.redirect("/campgrounds");
    }
});
   
});
//SHOW Route
app.get("/campgrounds/:id",function(req, res) {
   Campground.findById(req.params.id,function(err,foundCamp){
       if(err){
           console.log(err);
       }
       else
       {
         res.render("show",{camp:foundCamp});  
       }
   });
   
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp Server has !");
});