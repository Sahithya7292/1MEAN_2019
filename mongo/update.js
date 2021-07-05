var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/employee_db';

MongoClient.connect(url, function(err, db) {
    db.collection('employee').updateOne(
	{"empid": 2}, 
	{$set: {"empname": "akshit"}},
	function(err,result){
        if(err) throw err;
        console.log("1 data updated succesfully");
  });
  db.close();
}); 