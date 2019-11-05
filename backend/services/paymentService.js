var express = require('express')
var bodyParser = require('body-parser')
var async = require('async');
var request = require('request').defaults({
    json: true
});


var router = express.Router();

router.post('/pay', function (req, res) {
    async.parallel({
        data: function (callback) {
            request({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-ibm-client-id': 'd56a0277-2ee3-4ae5-97c8-467abeda984d',
                    'x-ibm-client-secret': 'bF1rB2nC1jY2tM4dL2bU1yO8sB1kX7cP3nK3pU0bV3gH1cN3uT',
                },
                uri: 'https://sandbox-api.payosy.com/api/payment',
                method: 'POST',
                json: req.body,
                strictSSL: false
            }, function (error, response, body) {
                if (error) {
                    callback({ error: error });
                    return;
                };
                if (!error && response.statusCode === 200) {
                    console.log(body)
                    callback(null, body);
                } else {
                    callback(response.statusCode);
                }
            });
        }
    }, function (error, results) {
        res.json({
            error: error,
            results: results.data
        });
    });
});

var paymentService = {router}

module.exports = paymentService