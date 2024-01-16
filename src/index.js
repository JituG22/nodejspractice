const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const appInitialController = (req, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World!");
  response.end();
};

const startLog = () => {
  console.log(`nodejs running on http://localhost:${process.env.PORT}`);
};
const server = http.createServer(appInitialController);
server.listen(process.env.PORT, startLog);
