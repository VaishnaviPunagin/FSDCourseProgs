const fs = require('fs');
console.log("Here we shall delete files, 'one.txt', Synchronously and 'two.txt', Asynchronously\n");

// Asynchronous method
fs.unlink('./two.txt', function(err){
    if (err) {
        return console.error(err);
    }
    console.log("File 'two.txt' has been deleted.\n\n");
});

// Synchronous method
fs.unlinkSync('./one.txt');
console.log("File 'one.txt' has been deleted.\n");
