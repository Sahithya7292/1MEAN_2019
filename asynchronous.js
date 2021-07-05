const http = require('http');
const sync = require('synchronize');

const server = http.createServer(function f1(request, response) {
	response.write('Hello World\n');
	response.end();
});

sync.server.listen(9092, function(){
	console.log('Server is running...');
	
});

console.log("After server running");