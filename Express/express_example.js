var express=require('express');
var app=express();

app.get('/',function(req,res)
{
	res.end('Hello World\n');
});
app.listen(3000,function()
{
	console.log('Server is running at 3000');
});