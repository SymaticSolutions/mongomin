/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var express = require('express'),
    router = express.Router();

// API routes import
var apiDatabases = require('./api/databases');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('API Req: ', req.url);
    next();
});

/**
 * API routes
 */

// Define databases API route
router.use('/databases', apiDatabases);

// Export router
module.exports = router;
