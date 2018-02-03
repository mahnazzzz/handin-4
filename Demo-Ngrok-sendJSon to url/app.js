const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/api/movies', function (req, res) {
 const restult = {
     title: 'The Basis',
     description: 'this is just a test'
 }
 res.json(restult);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})