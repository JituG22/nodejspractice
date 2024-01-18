// in this case we are CURD filesystem
const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "/files");

// create a new  file
for (let i = 0; i < 5; i++) {
  fs.writeFileSync(
    folderPath + `/file-${i + 1}.txt`,
    `This is and file number of ${i + 1} content`
  );
}

// get files name from folder
const getFilesName = function () {
  fs.readdir(
    folderPath,
    function (err, files) {
      console.log("fff", files);
    },
    (err) => {}
  );
};
getFilesName();

// read  each files content form the folder
const getReadAllFileData = async () => {
  fs.readdir(folderPath, function (err, files) {
    if (err) throw err;
    files.forEach((itemFile, idx) => {
      fs.readFile(
        folderPath + `/${itemFile}`,
        "utf8",
        function (err, fileItemData) {
          console.log(fileItemData);
        }
      );
    });
  });
};

getReadAllFileData();

// delete a file
// const deleteFile = function () {
//   fs.unlink(folderPath + "/file-1.txt", function (err) {
//     console.log(err);
//     if (err) throw err;
//   });
// };
// deleteFile();

// undate file
const updateFile = function () {
  fs.appendFile(
    folderPath + "/file-1.txt",
    `\n` + "new Database",
    function (err) {
      if (err) throw err;
    }
  );
};

updateFile();
