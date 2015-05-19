console.log("Scripts loaded");

var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ["$scope", function($scope){
    $scope.updatePost = function(){
        $scope.message = $scope.username + " posted: " + $scope.rant;
        $scope.username = null;
        $scope.rant = null;
    }
}]);