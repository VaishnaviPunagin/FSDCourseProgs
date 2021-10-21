const fs = require('fs')
console.log("\n\nCreating New File::");

// Asynchronous method
fs.writeFile('one.txt', "This is content inside the file 'one.txt' !!! Thank you.", function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("\nFile 'one.txt' has been created successfully.\n\n");
})

// Synchronous method
fs.writeFileSync('two.txt', "This is content inside the file 'two.txt' !!! Thank you.")
console.log("\nFile two.txt has been created successfully.\n")