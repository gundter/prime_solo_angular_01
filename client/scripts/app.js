console.log("Scripts loaded");

var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ["$scope", "$http", function($scope, $http){
    $scope.rant = {};
    $scope.posts = [];

    $scope.getData = function(){
        return $http.get('/rants').then(function(res){
            console.log("Made it here")
            if(res.status !== 200){
                throw new Error ("Sad Face :(");
            }

            $scope.rant = {};

            $scope.posts = res.data;
            console.log(res.data);
            return res.data;
        });
    };

    $scope.submitPost = function(rant){
        console.log("Starting this thing out");
        return $http.post('/rants', rant).then($scope.getData());
    };

    $scope.deletePost = function(rant){
        return $http.delete('/rants/' + rant._id, rant).then($scope.getData());
    };
}]);