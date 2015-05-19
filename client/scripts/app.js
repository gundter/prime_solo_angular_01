console.log("Scripts loaded");

var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ["$scope", function($scope){
    $scope.posts = [];
    $scope.updatePost = function(){
        $scope.rant = $scope.username + " posted: " + $scope.rant;
        $scope.posts.push($scope.rant);
        $scope.username = null;
        $scope.rant = null;
    }
}]);