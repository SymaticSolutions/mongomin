/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var MongoClient = require('mongodb');
var chalk = require('chalk');
var path = require('path');
var open = require('opener');
var route = require('../routes/router');
var express = require('express');
var app = express();

var mongomin = (function(){

    var _config = {},
        _connectionString = '';

    return {
        setConfig: function(config){
            console.log(typeof config);
            if(typeof config === 'string'){
                _config = JSON.parse(config);
            }else{
                _config = config;
            }
        },

        init: function(){
            console.log(chalk.green.bold("> Initiating mongomin."));
            _connectionString = 'mongodb://';

            // If username password is available add them to connection string.
            if(_config.mongo.username !== '' && _config.mongo.password !== ''){
                _connectionString += _config.mongo.username + ':' + _config.mongo.password + '@';
            }

            _connectionString += _config.mongo.hostname + ':' + _config.mongo.port + '/';

            console.log("  - mongodb connection string generated.");

            app.set('views', path.join(__dirname, '../views'));
            app.set('view engine', 'jade');

            app.use(express.static(path.join(__dirname, '/../assets')));
            app.use(express.static(path.join(__dirname, '/../node_modules')));

            app.use('/', route);

            app.listen('9386', function(){
                console.log("  - mongomin server is listening on 9386");
                console.log(chalk.green.bold("> mongomin initiated."));

                _config.mongomin.url = _config.mongomin.isSSL ? 'https://' : 'http://';
                _config.mongomin.url += _config.mongomin.host + ':' + _config.mongomin.port + '/';

                console.log("> Opening mongomin UI at " + _config.mongomin.url);

                // Open mongomin in browser.
                open(_config.mongomin.url);
            });
        }
    };
})();

module.exports = mongomin;