const express = require('express')
const app = express()

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/employee_db';

app.set('view engine', 'ejs')

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err)
  
  app.listen(3000, () => {
    console.log('listening on 3000');
  })
  
  app.get('/', (req, res) => {
  database.collection('employee').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {users: result})
  })
})

})
