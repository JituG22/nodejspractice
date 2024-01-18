const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "filesadd");
// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     dirPath + "/" + `file-${i + 1}.txt`,
//     `This is a file number of ${i + 1}`
//   );
// }

const getFilesName = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    console.log(files);
  });
};
console.log(getFilesName());
