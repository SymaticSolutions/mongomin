/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var express = require('express'),
    router = express.Router();

// Web routes import
var routRoot = require('./web/root'),
    routHome = require('./web/home'),
    routDatabase = require('./web/database');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('Web Req: ', req.url);
    next();
});

/**
 * Web routes
 */

// Define root
router.use('/', routRoot);

// Define home page route
router.use('/home', routHome);

// Define database page route
router.use('/database', routDatabase);

// Export router
module.exports = router;
