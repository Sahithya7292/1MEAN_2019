const express = require('express')
const app = express()


app.listen( 3000, () => {
    console.log('listening on 3000')
  });
app.set('view engine', 'ejs')

app.use(express.static('public'))

var result = ['Bindu','Nikitha','Varsha'];
app.get('/', (req, res) => {
    
      res.render('index.ejs', {users: result})
})