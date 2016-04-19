/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var router = require('express').Router(),
    databaseLib = require('../../lib/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
    dbObj = new databaseLib();
    dbObj.showDbs(req, res, next);
});

module.exports = router;