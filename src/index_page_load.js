const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
const port = 9090; // Port number is declared here

// app.use(express.static(publicPath));

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/home.html`);
});
app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/contact", (_, res) => {
  res.sendFile(`${publicPath}/contact.html`);
});
app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/pagenot.html`);
});
// Use the port variable here, and add a callback function for confirmation
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
