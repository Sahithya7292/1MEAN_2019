var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/employee_db';

MongoClient.connect(url, function(err, db) {
    if (err) return console.log(err);
    db.collection('employee').insertMany([{
        empid: 4,
        empname: "Pinky",
        empsalary:62000
    },{empid: 5,
        empname: "Nikitha",
	empsalary:62000}], function(err,result){
      if(err) throw err;
      console.log("1 data inserted succesfully")
    })
	db.close();
});