const http = require('http');

//callback 1
const server = http.createServer(
  function f1(request, response) {
	response.write('Hello World\n');
	response.end();
});

//callback 2
/*const server = http.createServer(function(request, response) {
	response.write('Hello World\n');
	response.end();
});*/

//callback 3
/*const server = http.createServer((request, response) => {
	response.write('Hello World\n');
	response.end();
});*/

server.listen(9092, function(){
	
	console.log('Server is running...');
	console.log(server);
	
});

//callback 4
/*server.listen(9092, ()=>{
	console.log('Server is running...');
});*/