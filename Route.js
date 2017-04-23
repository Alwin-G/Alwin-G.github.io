var app = angular.module('myApp', ['ngRoute', 'myApp.Filters']); //needs myApp.Filters in order to work
app.config(function($routeProvider) {
    
    $routeProvider.when("/Home", {
        templateUrl : "HTML/Home.html",
        controller: "HomeController"
    })
    .when("/Profile", {
        templateUrl : "HTML/Profile.html",
        controller: "ProfileController"
    })
    .when("/Chat", {
        templateUrl : "HTML/Chat.html",
        controller: "ChatController"
    })
    .when("/Friends", {
        templateUrl : "HTML/Friends.html",
        controller: "FriendsController"
    }) 
    .when("/Login", {
        templateUrl: "HTML/Login.html",
        controller: "LoginController"
    })
    .when("/CreateUser", {
        templateUrl: "HTML/CreateUser.html",
        controller: "CreateUserController"
    })
       
    .when("/Hidden", { templateUrl : "HTML/Hidden.html" })


    .otherwise({ redirectTo: "/Login" });
});