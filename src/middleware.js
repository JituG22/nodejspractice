module.exports = myMiddleware = (req, res, next) => {
  console.log("myMiddleware..!");
  next();
};
