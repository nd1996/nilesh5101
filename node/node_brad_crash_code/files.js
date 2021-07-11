const fs = require("fs");
const path = require("path");

// Create directory
/* fs.mkdir(path.join(__dirname, "/test_folder"), {}, err => {
    if (err) throw err;
    console.log("Folder Created");
}); */

// create and write to files
/* fs.writeFile(path.join(__dirname, "/test_folder", "test.txt"), "Har Har Mahadev", err => {
    if (err) throw err;
    console.log("test.txt is created");
    appendFile();
}); */

// append the file content
/* const appendFile = () => {
    fs.appendFile(path.join(__dirname, "/test_folder", "test.txt"), " and I Love My India", err => {
        console.log(" I Love My India is appended successfully");
    })
} */

// Read the file
/* fs.readFile(path.join(__dirname, "/test_folder", "test.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.warn(data);
}); */

// rename the file
fs.rename(path.join(__dirname, "/test_folder", "test.txt"), path.join(__dirname, "/test_folder", "renamed.txt"), err => {
    if (err) throw err;
    console.log("Rename the test.txt");
})