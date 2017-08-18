var express = require('express');
var router = express.Router();

router.get('/production', function (req, res, next) {
    res.json({'version': "1.0.1"});
});

router.get('/integration', function (req, res, next) {
    res.json({'version': "3.0.x-dev"});
});


router.route('/staging')
    .get(function (req, res) {
        res.json({'version': "2.0.0"});
    })
    .post(function (req, res) {
        res.send('OK');
    });

module.exports = router;
