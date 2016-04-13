/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var express = require('express'),
    router = express.Router(),
    routHome = require('./web/home');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.use('/', routHome);
// define the about route
router.get('/api', function(req, res) {
    res.send('mongomin about');
});

module.exports = router;
