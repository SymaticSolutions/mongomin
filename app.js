/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var chalk = require('chalk');
var fs = require('fs');
var prompt = require('prompt');
var mongomin = require('./lib/mongomin');

console.log(chalk.green.bold("> Mongomin Started."));

// Check if config.json file is exist.
// If not exist create one with user inputs.
fs.exists('config.json', function(isExist){
    if(isExist){
        fs.readFile('config.json', function(err, data){
            // Set config data to mongomin
            mongomin.setConfig(data.toString());

            console.log("> Config data fetched.");

            // Initialize mongomin application
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
            data = {
                mongo: data,
                mongomin: {
                    isSSL: false,
                    host: 'localhost',
                    port: '9386'
                }
            };

            fs.writeFile('config.json', JSON.stringify(data), function(){
                console.log("> Connection parameters written to config.json file.");

                // Set config data to mongomin
                mongomin.setConfig(JSON.stringify(data));

                // Initialize mongomin application
                mongomin.init();
            });
        });
    }
});
