const path = require("path")

console.log(path.sep)
const filePath = path.join('content', 'subfolder', 'test.txt' )
// joins the path / normalized path
//removes leading/trailing slashes
console.log(filePath)

//returns base name of the path
const baseName = path.basename(filePath)
console.log(baseName)

//important to get the exact location of the file.
//useful to determine the file location on any machines
//since every machine will have different path names
const absolute = path.resolve('content', 'subfolder', 'text.txt');
console.log(absolute)

