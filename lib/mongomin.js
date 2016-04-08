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
var route = require('./route');
var express = require('express');
var app = express();

var mongomin = (function(){

    var _config = {},
        _connectionString = '';

    return {
        setConfig: function(config){
            _config = config;
        },

        init: function(){
            console.log(chalk.green.bold("> Initiating mongomin."));
            _connectionString = 'mongodb://';

            // If username password is available add them to connection string.
            if(_config.username !== '' && _config.password !== ''){
                _connectionString += _config.username + ':' + _config.password + '@';
            }

            _connectionString += _config.hostname + ':' + _config.port + '/';

            console.log("  - mongodb connection string generated.");

            app.set('views', path.join(__dirname, '../views'));
            app.set('view engine', 'jade');

            app.use(express.static(path.join(__dirname, '/../assets')));
            app.use(express.static(path.join(__dirname, '/../node_modules')));

            app.use('/', route);

            app.listen('9386', function(){
                console.log("  - mongomin server is listening on 9386");
                console.log(chalk.green.bold("> mongomin initiated."));

                // Open mongomin in browser.
                open('http://localhost:9386/');
            });
        }
    };
})();

module.exports = mongomin;