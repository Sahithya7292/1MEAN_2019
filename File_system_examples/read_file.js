const http = require('http'); 
const fs = require('fs');

const server = http.createServer(
   (request, response) => {
	  fs.readFile('new_file1.txt', 
	   function(err, data) {
		response.write(data);	
		response.end();	
	});
});

server.listen(9000, () => { 
	console.log('Server is running...'); 
}); 





