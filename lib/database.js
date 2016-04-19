/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var assert = require('assert'),
    mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

module.exports = function(){
    mongomin = require('./mongomin');

    return {
        showDbs: function(req, res, next, cb){
            mongoClient.connect(mongomin.mongoConnectionString(), function(err, db){
                db.admin().listDatabases(function(err, dbs){
                    res.json(dbs);
                    db.close();
                })
            });
        }
    };
};