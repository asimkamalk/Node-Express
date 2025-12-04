const fs = require("fs");

const textInp = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInp);

const textOut = `Text from output.txt method--> writeFileSync ${textInp}. \n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

console.log("File has been written");
