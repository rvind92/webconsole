(function() {
    
    var LoginController = function($scope, webServiceFactory) {
        
        var firebaseToken;
        
        $scope.SendData = function() {
            
            var creds = $.param({
               eField: $scope.email,
               pField: $scope.password
            });
            
            loginFactory.postCredentials(creds).then(function(response) {
                firebaseToken = response.headers('Firebasetoken');
                $scope.email = '';
                $scope.password = '';
            }, function(data, status, headers, config) {
                alert("Error" + status);
            });
            
        };
        
        
        // need to move this inside the Promise success and add a redirect path to site.html
        if(firebaseToken) {
            firebase.auth().signInWithCustomToken(firebaseToken).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }  
    }
    
    LoginController.$inject = ['$scope', 'loginFactory'];
    
    angular.module('tanandApp').controller('LoginController', LoginController);
    
}());