(function() {
    
    var fireFactory = function($firebaseOject) {
        
        var firebase = {};
        
        firebase.setSite = function(siteKey, address, lat, lng, site) {
            const rootRef = firebase.database().ref().child('locationList');
            var siteRef = rootRef.child(siteKey);
            return siteRef.set({
                "address": address,
                "lat": lat,
                "lng": lng,
                "site": site
            });
        };
        
        firebase.setBuilding = function(siteKey, building) {
            const rootRef = firebase.database().ref().child('buildingList').child(siteKey);
            var buildingRef = rootRef.child().child(buildingKey);
            return buildingRef.set({
                
            });
        };
        
        firebase.setFloorplan = function() {
            
        };
        
        firebase.setSensor = function() {
            
        };
        
        firebase.update = function() {
            
        };
        
        firebase.delete = function() {
            
        };
        
        return firebase;
    }
    
    fireFactory.$inject = ['$firebaseObject'];
    
    angular.module("tanandApp").factory('fireFactory', fireFactory);
    
}());