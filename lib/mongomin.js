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

var mongomin = {

    config: {},

    connectionString : '',

    init: function(){
        console.log(chalk.green.bold("> Initiating mongomin."));
        this.connectionString = 'mongodb://';

        // If username password is available add them to connection string.
        if(this.config.username !== '' && this.config.password !== ''){
            this.connectionString += this.config.username + ':' + this.config.password + '@';
        }

        this.connectionString += this.config.hostname + ':' + this.config.port + '/';

        console.log("  - mongodb connection string generated.");

        app.set('views', path.join(__dirname, '../views'));

        app.use('/', route);
        app.listen('9386', function(){
            console.log("  - mongomin server is listening on 9386");
            console.log(chalk.green.bold("> mongomin initiated."));
            open('http://localhost:9386/');
        });
    }
};

module.exports = mongomin;