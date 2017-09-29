angular.module("TodoDirective", [])
    .directive("todoTable", function(){
        return{
            restrict: "EA",
            templateUrl: "templates/directives/todo-table.html"
        };
    });
    