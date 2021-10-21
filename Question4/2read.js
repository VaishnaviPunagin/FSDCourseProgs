const fs = require('fs');
console.log("\n\nOpening file 'one.txt' to read.\nReading 'one.txt'\n")

// Asynchronous method
fs.readFile('./one.txt',function(err, fd){
        if (err) throw err;
        console.log("Asynchronous Read: " + fd.toString()+"\n\n");
});

// Synchronous method
var data = fs.readFileSync('./one.txt');
console.log("Synchronous Read: " + data.toString() + "\n");