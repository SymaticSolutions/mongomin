/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

angular.module('mongomin.controllers', [])
    .controller('SideToolbarCtrl', function($scope, $mdSidenav, SidebarToolService){
        $scope.sidebarTools = SidebarToolService;

        $scope.gotoHome = function(){
            alert('');
        };

        console.log('Hello There too');
    })

    // Toolbar controller
    .controller('ToolbarCtrl', function($scope, $mdSidenav){
        $scope.toggleSidebar = function(){
            $mdSidenav('leftmenu')
                .toggle()
                .then(function () {
                    console.log('done');
                    //$log.debug("toggle " + navID + " is done");
                });
        };
    })

    // Home controller
    .controller('HomeCtrl', function($scope, $http){
        console.log('Hello There');
    })

    //DBList controller
    .controller('DBListCtrl', function($scope, $http){
        $http
            .get('/api/databases')
            .then(function(res){
                if(res.status === 200){
                    if(res.data.ok === 1){
                        $scope.databases = res.data.databases;
                    }
                }
            }, function(res){

            });
    })

    // Use DB controller
    .controller('UseDBCtrl', function($scope, $http){

    });