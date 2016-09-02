(function() {
    var loginFactory = function($http) {
    
        var factory = {};
        
        var config = {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8;'
            }
        }
        
        factory.postCredentials = function(credentials) {
            return $http.post('/users', credentials, config);
        };
        
        factory.createUser = function(credentials) {
            return $http.post('/users', credentials, config);
        };
        
        return factory;
    };
    
    loginFactory.$inject = ['$http'];
        
    angular.module('tanandApp').factory('loginFactory', loginFactory);
                                           
}());