var sum = require('./Addition.js');
function Multiply(a,b)
{
	return a*b;
}
function Subtract(a,b)
{
	return a-b;
}
function Add(x,y)
{
	return sum.addNumber(x,y);
}
exports.Multiply = Multiply;
exports.Subtract = Subtract;
exports.Add = Add;

