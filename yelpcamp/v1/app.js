var express = require("express");
var bodyParser=require("body-parser");
var app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
    //res.send("This will be the landing page!");
    res.render("landing");
});

 var camp=[
    {name:"Salmon Creek", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Golden Trail", image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
    {name:"Mountain Goats", image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"},
    {name:"Salmon Creek", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Golden Trail", image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
    {name:"Mountain Goats", image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"},
    {name:"Salmon Creek", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Golden Trail", image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
    {name:"Mountain Goats", image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"},
    {name:"Salmon Creek", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Golden Trail", image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
    {name:"Mountain Goats", image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"},
    {name:"Salmon Creek", image:"https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg"},
    {name:"Golden Trail", image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false"},
    {name:"Mountain Goats", image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5306226.jpg"}
    ];
    
app.get("/campgrounds", function(req,res){
   res.render("campgrounds",{camp:camp})
});

app.get("/campgrounds/new", function(req, res) {
  
    res.render("new.ejs");
});

app.post("/campgrounds", function(req,res) {
    // body...
    var name=req.body.name;
    var image=req.body.image;
    var newCamp={name: name, image:image}
    camp.push(newCamp);
    res.redirect("/campgrounds");
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp Server has started!");
});