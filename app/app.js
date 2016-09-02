(function() {
    
    var app = angular.module('tanandApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/site', {
                controller: 'SiteController',
                templateUrl: 'app/views/site.html'
            })
//            .when('/building', { 
//                controller: "BuildingController", 
//                templateUrl: "app/views/building.html"
//            })
//            .when('/floorplan', {
//                controller: "FloorplanController",
//                templateUrl: "app/views/floorplan.html"
//            })
//            .when('/sensor', {
//                controller: "SensorController",
//                templateUrl: "app/views/sensor.html"
//            })
//            .when('/edit_delete', {
//                controller: "EditDeleteController",
//                templateUrl: "app/views/edit_delete.html"
//            })
//            .when('/register', {
//                controller: "RegisterController",
//                templateUrl: "app/views/register.html"
//            })
            .otherwise( { redirectTo: '/login' } );
    });
    
}());