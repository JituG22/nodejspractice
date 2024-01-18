const fs = require("fs");
const path = require("path");
const FolderPath = path.join(__dirname);
// const createFolder = function () {
//   fs.mkdir(FolderPath + "/helloworld", function (err) {
//     if (err) throw err;
//     console.log("Directory created");
//   });
// };

// createFolder();

// folder rename
const folderRename = () => {
  fs.rename(
    FolderPath + "/helloworld",
    FolderPath + "/newname",
    function (err) {
      if (err) throw err;
      console.log("Directory renamed");
    }
  );
};
folderRename();
