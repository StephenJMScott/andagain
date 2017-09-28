angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = 'Welcome To Angular Todo! :) It gets better, honest!!';
    })
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {
        
        store.remove("testObject")
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
        
       
        
        $scope.login=function(){
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results){
            // can use vanilla javascript rather than load a library as commented out below
            store.set("username", $scope.registrationUser.username);
            store.set("authToken", results.data.token);
            // localStorage.setItem("username", $scope.registrationUser.username);
            // localStorage.setItem("authToken", results.data.token);
        }).catch(function(err){
            console.log(err.data);
        });
    };
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            
            
            UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results){
                $scope.data = results.data;
                alert("Yay! You have successfully registered!!");
                $scope.login();
            }).catch(function(err){
                alert("Oh No! Someone must have that name already!");
                console.log(err);
            });

            
        }
        };
    })
    .controller('todoController', function($scope, $location, TodoAPIService, store) {
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');
 
        $scope.todos = [];
 
        TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken).then(function(results) {
            $scope.todos = results.data || [];
            console.log($scope.todos);
        }).catch(function(err) {
            console.log(err);
        });
 
        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.username = $scope.username;
                $scope.todos.push($scope.todo);
 
                TodoAPIService.createTodo(URL + "todo/", $scope.todo, $scope.authToken).then(function(results) {
                    console.log(results);
                }).catch(function(err) {
                    console.log(err);
                });
            }
        };
        
        $scope.deleteTodo = function(id) {
            TodoAPIService.deleteTodo(URL + "todo/" + id, $scope.username, $scope.authToken).then(function(results){
                console.log(results);
            }).catch(function(err){
                console.log(err.data);
            })
        }
    });
