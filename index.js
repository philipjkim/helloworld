var express = require('express')
var app = express()
var pjson = require('./package.json')

app.get('/', function (req, res) {
  res.send(`Hello World! (ver: ${pjson.version})`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
