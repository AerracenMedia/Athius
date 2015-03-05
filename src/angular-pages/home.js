"use strict";

/* homepage */


angular.module("home", [])
.controller("homeController", ["$scope", function($scope){

}])
.directive("home", function(){
  return {
    restrict:"E",
    controller:"homeController",
    templateUrl:"home.html"
  }
});
