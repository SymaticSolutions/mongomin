/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var express = require('express'),
    router = express.Router();

// Web routes import
var routHome = require('./web/home');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

/**
 * Web routes
 */

// Define home page route
router.use('/', routHome);

// Export router
module.exports = router;
