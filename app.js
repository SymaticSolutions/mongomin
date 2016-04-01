/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var chalk = require('chalk');
var fs = require('fs');
var prompt = require('prompt');
var mongomin = require('./lib/core');

console.log(chalk.green.bold("> Mongomin Started."));

fs.exists('config.json', function(isExist){
    if(isExist){
        fs.readFile('config.json', function(err, data){
            mongomin.config = data.toString();

            console.log("> Config data fetched.");

            mongomin.init();
        });
    }else{
        console.log(chalk.red("> Configuration file missing."));
        console.log("> Getting connection parameters.\n");

        prompt.message = chalk.green.bold("mongomin");

        prompt.start();

        prompt.get({
            properties: {
                host: {
                    description: chalk.blue("mongoDB Host Name"),
                    default: '127.0.0.1'
                },
                port: {
                    description: chalk.blue("mongoDB Port"),
                    default: '27017'
                },
                username: {
                    description: chalk.blue("mongoDB Username"),
                    default: ''
                },
                password: {
                    description: chalk.blue("mongoDB Password"),
                    default: ''
                }
            }
        }, function (err, data) {
            fs.writeFileSync('config.json', JSON.stringify(data));

            console.log("> Connection parameters written to config.json file.");

            mongomin.config = data.toString();

            mongomin.init();
        });
    }
});



/*

MongoClient.connect(connectionString, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});*/
