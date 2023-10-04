const express = require("express");
const path = require("path"); //Khai bao path de su dung view engine
const app = express(); // express
const port = process.env.PORT || 3000; //port
const hostname = process.env.HOST_NAME;
//Cấu hình Template engine
app.set("views", path.join(__dirname, "views")); //Khai bao thu muc luu tru
app.set("view engine", "ejs"); //khai bao view engine

//khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.render("home.ejs");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
