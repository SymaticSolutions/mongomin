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

// API routes import
var apiDatabases = require('./api/databases');

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

/**
 * API routes
 */

// Define databases API route
router.get('/api/databases', apiDatabases);

// Export router
module.exports = router;
