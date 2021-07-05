var fs = require('fs');

fs.appendFile('new_file1.txt', '\nThis is my appended text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
