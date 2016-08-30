(function() {
    var loginFactory = function($http) {
    
        var factory = {};
        
        factory.postCredentials = function() {
            return $http.get('/customers');
        };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
        
        return factory;
    };
    
    loginFactory.$inject = ['$http'];
        
    angular.module('tanandApp').factory('loginFactory', loginFactory);
                                           
}());