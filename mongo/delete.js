var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/employee_db';

MongoClient.connect(url, function(err, db) {
    db.collection('employee').deleteOne({"empid":3},
	function(err,result){
        if(err) throw err;
        console.log("1 data deleted succesfully");
  });
  db.close();
}); 