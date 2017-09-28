angular.module("RouteControllers", [])
    .controller("HomeController", function($scope) {
        $scope.title = "Welcome To Angular Todo! :) It gets better, honest!!";
    })
    .controller("RegisterController", function($scope, UserAPIService) {
        
        $scope.registrationUser = {}
        var URL="https://morning-castle-91468.herokuapp.com/"
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
            
            UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results){
                $scope.data;
                alert("Yay! You have successfully registered!!");
            }).catch(function(err){
                alert("Oh No! Someone must have that name already!");
                console.log(err);
            });
            
            
            /*this part was removed after adding the API*/
            // console.log($scope.registrationUser.username + " " + $scope.registrationUser.password);
            
        }
    });