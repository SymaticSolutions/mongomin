/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

module.exports = {
    config: {},

    connectionString : '',

    init: function(){
        console.log("> Mongomin initiated.");
        this.connectionString = 'mongodb://';

        // If username password is available add them to connection string.
        if(this.config.username !== '' && this.config.password !== ''){
            this.connectionString += this.config.username + ':' + this.config.password + '@';
        }

        this.connectionString += this.config.hostname + ':' + this.config.port + '/';

        console.log("> Mongodb connection string.");
    }
};