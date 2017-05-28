require('babel-register')

let html = require('./render.js').default

var express = require('express')
var application = express()

application.use(express.static('public'))
application.get('/', function (req, res) {
  res.send(html)
})

application.listen(8000)
