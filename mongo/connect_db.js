const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/employee_db';
MongoClient.connect( url, (err, database) => {
  if (err) return console.log(err)
  console.log('Connected')
  //database.close();
})
