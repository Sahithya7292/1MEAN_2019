var fs = require('fs');

fs.writeFile('new_file1.txt', 
'Hello students! hello kmit', 
function (err) {
  if (err) throw err;
  console.log('Saved!');
});

