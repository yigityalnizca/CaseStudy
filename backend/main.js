var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var async = require('async');
var request = require('request').defaults({
    json: true
});

var qr = require('./services/qrService');
var payment = require('./services/paymentService');
var app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/api/qr', qr.router)

app.use('/api/payment', payment.router)

app.listen(7200, function () {
    console.log('MainServer is online http://localhost:7200/');
});