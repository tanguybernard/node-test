var express = require('express');
var router = express.Router();

router.get('/production', function(req, res, next) {
    res.json({'version': "2.3.0" })
});

router.get('/integration', function(req, res, next) {
    res.json({'version': "3.1.x-dev" })
});

module.exports = router;
