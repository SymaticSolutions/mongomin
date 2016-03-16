/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

var MongoClient = require('mongodb').MongoClient;
var chalk = require('chalk');
var fs = require('fs');

console.log(chalk.green("> Mongomin Running"));

fs.exists('config.json',function(res){
    if(res === false){
        console.log(chalk.red("> Config file missing"));
        var prompt = require('prompt');

        prompt.message = "mongomin";

        prompt.start();

        prompt.get({
            properties: {
                firsttime: {
                    description: chalk.blue("Are you using ")
                }
            }
        }, function (err, result) {
            console.log(colors.cyan("You said your name is: " + result.name));
        });

    }
});

/*
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});*/
