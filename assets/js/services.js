/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

angular.module('mongomin.services', [])
    .factory('SidebarToolService', function(){
        return [
            {
                'label' : 'Home',
                'icon' : 'home',
                'clickAction' : 'gotoHome'
            }
        ]
    });