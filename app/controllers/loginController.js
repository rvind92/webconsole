(function() {
    
    var LoginController = function($scope, loginFactory) {
        
        function init() {
            
            loginFactory.postCredentials()
            
        }
        
        init();
        
    }
    
    angular.module('tanandApp').controller('LoginController', LoginController);
    
}());