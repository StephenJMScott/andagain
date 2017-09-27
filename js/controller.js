angular.module("RouteControllers", [])
    .controller("HomeController", function($scope) {
        $scope.title = "Welcome To Angular Todo! :) It gets better, honest!!";
    })
    .controller("RegisterController", function($scope) {
        
        $scope.registrationUser = {}
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
            
            console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
        }
    });