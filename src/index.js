const express = require("express");
const dotenv = require("dotenv");

const myMiddleware = require("./middleware");
// const route = express.Router();
dotenv.config();

const app = express();

//route.use(myMiddleware);
// app.use("/", route);
// route.get("/about", (req, res) => {
//     res.send("About Page");
//   });

// app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

route.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("*", (req, res) => {
  res.send("Page Not Found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
