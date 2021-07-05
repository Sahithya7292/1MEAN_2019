var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/employee_db';

MongoClient.connect(url, function(err, db) {
    if (err) return console.log(err);
    var cursor=db.collection('employee').find();
    cursor.each(function(err,doc){
        console.log(doc);
    })    
}
);