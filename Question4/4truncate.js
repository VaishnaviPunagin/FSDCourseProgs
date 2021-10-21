const fs = require('fs');
console.log("\nContent of the file before performing a truncate operation :: \n ");
console.log(fs.readFileSync('text.txt', 'utf8')+"\n\n");

// Get the file descriptor of the file
const fd = fs.openSync('text.txt', 'r+');

// Synchronous method
fs.ftruncateSync(fd, 40);
console.log("Synchronous Truncating of the file: ");
console.log(fs.readFileSync('text.txt', 'utf8')+"\n\n");

// Asynchronous method
fs.ftruncate(fd, 20, function(err){
    if (err) throw err;
    console.log("Asynchronous Truncating of the file: ");
    console.log(fs.readFileSync('text.txt', 'utf8')+"\n\n");
});
