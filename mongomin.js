/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var MongoClient = require('mongodb').MongoClient;
var chalk = require('chalk');
var fs = require('fs');
var prompt = require('prompt');
var mongomin = require('./utility');


console.log(chalk.green.bold("> Mongomin Started."));

if(fs.existsSync('config.json')){
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
        console.log("\n> Creating config.json file.");

        fs.writeFileSync('config.json', JSON.stringify(data));

        mongomin.config = JSON.parse(data.toString());

        console.log("> Connection parameters written to config.json file.");;
    });
}else{
    console.log("> Fetching config data.");
    var data = fs.readFileSync('config.json');

    mongomin.config = JSON.parse(data.toString());
}

mongomin.init();

/*

MongoClient.connect(connectionString, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});*/
