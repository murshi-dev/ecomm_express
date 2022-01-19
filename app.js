require('./src/settings/db.config')

//hide prt number process
require("dotenv").config();

const express = require("express");
//copy only the express() function and assign it to app variable
const app = express();

//port number hide using app s methods
app.set("port", process.env.PORT || 8005);

//for letting know where the view folders and where each page exists
const path = require("path");

const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//settings for static or image files

app.use(express.static(path.join(__dirname, "src/public/images")));



//call api using use keyword

const endPoint=require('./src/routes')

//using endpoint call each api

app.use('/api',endPoint.home)
app.use('/api',endPoint.login)
app.use('/api',endPoint.register)


//mispelled charecters api ---retrieves correct api---can use * or ?
app.get("/man*sa", (req, res) => {
  res.send("mansa api");
});

//retrieve api data---vehicle is api or endpoint---data is the value
//http://localhost:8000/vehicle/bicycle will diaply the data in console
app.get("/vehicle/:data", (req, res) => {
  console.log(req.params.data);
  res.send("vehicle api");
});

app.get("/vehicle/:name/:email", (req, res) => {
  console.log(req.params.name);
  console.log(req.params.email);
  //res.send("vehicle api")
  res.send(`hello ${req.params.name} mail is ${req.params.email}`);
});

//create server
app.listen(app.get("port"), () => {
  console.log(`server started on port ${app.get("port")}`);
});
