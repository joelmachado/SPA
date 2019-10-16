var app = angular.module("myAppNav", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/views/home.html"
    })
    .when("/sobre", {
        templateUrl : "app/views/sobre.html"
    })
    .when("/contato", {
        templateUrl : "app/views/contato.html"
    });
});