const fs = require("fs");

// Blocking, synchronous way
// const textInp = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textInp);

// const textOut = `Text from output.txt method--> writeFileSync ${textInp}. \n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("File has been written");

// Non-Blocking asynchronous way

// Call Back Hell
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("Err");
  fs.readFile(`./txt/input.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.writeFile("./txt/append.txt", `${data1}\n ${data2}`, (err) => {
      console.log("file hass been written");
    });
  });
});
console.log("Will read file");
