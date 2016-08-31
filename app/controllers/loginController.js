(function() {
    
    var LoginController = function($scope, loginFactory) {
        
        var firebaseToken;
        
        $scope.SendData = function() {
            
            var creds = $.param({
               eField: $scope.email,
               pField: $scope.password
            });
            
//            loginFactory.postCredentials(creds).then(function(response) {
//                firebaseToken = response.data;
//            }, function(data, status, headers, config) {
//                alert("Error" + status);
//            });
            
            $scope.PostDataResponse = $scope.email;
        };
        
    }
    
    LoginController.$inject = ['$scope', 'loginFactory'];
    
    angular.module('tanandApp').controller('LoginController', LoginController);
    
}());