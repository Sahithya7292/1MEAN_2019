const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db
MongoClient.connect('mongodb://localhost:27017/Quotation_DB', (err, database) => {
  if (err) return console.log(err)
  db = database.db('Quotation_DB')
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/update', (req, res) => {
  
  db.collection('quotes')
  .findOneAndUpdate({name: req.body.uname}, {
    $set: {
      name: req.body.new_name,
      quote: req.body.new_quote
    }
  }, {
    sort: {_id: -1}
    }, 
    (err, result) => {
    if (err) return res.send(err)
    console.log('Document updated to database')
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        
        res.render('index.ejs', {quotes: result})
       
        })
  })
  
})

app.post('/delete', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.dname}, (err, result) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        console.log('Document deleted')
    res.render('index.ejs', {quotes: result})
    })
  })
})





/*const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/Quotation_DB';
MongoClient.connect( url, (err, database) => {
  if (err) return console.log(err)
  console.log('Connected')
  //database.close();
})*/