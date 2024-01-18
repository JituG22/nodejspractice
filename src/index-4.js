const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.get("", (req, res) => {
  // http://localhost:5000/?name=jitu
  console.log("get req data", req.query.name);
  res.send("hello world default page ");
});
app.get("/about", (req, res) => {
  res.send("hello this is about page " + req.query.name);
});
app.listen(process.env.PORT || 6000);
