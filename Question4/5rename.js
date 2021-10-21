const fs = require('fs');
console.log("\n\nRename a file::\n");

// Asynchronous method
fs.rename('./prophecy.txt', 'TheSeven.txt', function(err){
    if (err){
        console.error(err);
    }
    console.log("Asynchronous Rename :: text.txt is now prophecy.txt\n\n");
});

// Synchronous method
fs.renameSync('first.txt', 'SalesforceIntro.txt')
console.log("Synchronous Rename :: prophecy.txt is now TheSeven.txt\n\n");

