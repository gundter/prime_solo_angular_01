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

            $scope.posts = res.data;
            console.log(res.data);
            return res.data;
        });
        $scope.rant.username = '';
        $scope.rant.rantInfo = '';
    };

    $scope.submitPost = function(rant){
        console.log("Starting this thing out");
        return $http.post('/rants', rant).then($scope.getData());
            /*.then(function(res){
            if(res.status !== 200){
                throw new Error ("Post failed");
            }
            console.log(res);
        });*/
    };
}]);