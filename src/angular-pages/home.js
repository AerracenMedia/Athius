"use strict";

require("./map/map.js");

/* homepage */


angular.module("home", ["map"])
.controller("homeController", ["$scope", function($scope){

}])
.directive("home", function(){
  return {
    restrict:"E",
    controller:"homeController",
    templateUrl:"home.html"
  }
});
