(function() {
    
    var SiteController = function($scope, fireFactory) {
        
        site = $scope.site;
        siteKey = (site.replace(/ /g, '').toLowerCase());
        address = $scope.address;
        lat = $scope.lat;
        lng: $scope.lng;
        
        function init() {
            fireFactory.setSite(siteKey, address, lat, lng, site)
                .then(function() {
                $scope.site = "";
                $scope.address = "";
                $scope.lat = "";
                $scope.lng = "";
            }, function() {
                alert('Unable to perform action at the moment');
            });
        }
        
        init();
    }
    
    SiteController.$inject = ['$scope', 'fireFactory'];
    
    angular.module('tanandApp').controller('SiteController', SiteController);
    
}());