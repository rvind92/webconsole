(function() {
    var webServiceFactory = function($http) {
    
        var factory = {};
        
        var config = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8;'
            }
        }
        
        factory.postCredentials = function(credentials) {
            return $http.post('http://192.168.3.3:3030/users/login', credentials);
        };
        
        factory.createUser = function(credentials) {
            return $http.post('http://192.168.3.3:3030/users', credentials);
        };
        
        factory.logOut = function(credentials) {
            return $http.delete('http://192.168.3.3:3030/users/login', credentials)
        }
        
        return factory;
    };
    
    webServiceFactory.$inject = ['$http'];
        
    angular.module('tanandApp').factory('webServiceFactory', webServiceFactory);
                                           
}());