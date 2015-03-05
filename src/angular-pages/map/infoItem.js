"use strict";

angular.module("infoItem", [])
.controller("infoItemController", ["$scope", function($scope){

}])
.directive("infoItem", function(){
  return {
    restrict:"E",
    controller:"infoItemController",
    templateUrl:"map/info-item.html"
  }
});
