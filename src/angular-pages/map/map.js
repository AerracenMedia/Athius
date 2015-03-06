"use strict";

require("./infoItem");
require("./../../zoomMagic");

angular.module("map", ["infoItem"])
.controller("mapController", ["$scope", function($scope){

  $scope.mapStyle={
    "-ms-transform":"translate(0px,0px) scale(1,1)",
    "-webkit-transform":"translate(0px,0px) scale(1,1)",
    "transform":"translate(0px,0px) scale(1,1)"
  };


  $scope.zoom={
    x:0,
    y:0,
    amount:0,
    min:0,
    update:function(){
      var amount=this.amount/300;
      var style="translate("+this.x+"px,"+this.y+"px) scale("+amount+","+amount+")";

      $scope.$apply(function(){
        debugger;
        $scope.mapStyle["-ms-transform"]=style;
        $scope.mapStyle["-webkit-transform"]=style;
        $scope.mapStyle.transform=style;
      });
    }
  };

  var zoomMagic=require("./../../zoomMagic")($scope.zoom);

  $scope.info={
    name:"Area B",
    icon:"icon.png",
    items:[
      "Hi! I'm an item, my text can be dynamically changed via clicking the map!",
      "I'm an Item too!",
      "Me too! But I'm the best because my text is the longest!\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lectus imperdiet, porttitor erat non, faucibus arcu. Vivamus sed gravida augue. Ut auctor, dolor eget euismod vestibulum, nisl orci lacinia lectus, a fringilla nisl risus in dolor. Maecenas ac ultrices enim. Nulla facilisi. Morbi molestie nisl in urna rutrum, quis lacinia nulla pharetra. Curabitur sagittis purus et metus lacinia rhoncus. Donec non luctus turpis. Morbi convallis, erat eu scelerisque fringilla, nisl justo varius tellus, sit amet pellentesque metus tellus sit amet ante. Vivamus nec pharetra ligula.",
      "psssh tryhard.",
      "I can do better! Ut dapibus, tellus facilisis rutrum facilisis, dolor leo ullamcorper magna, vel pretium mauris metus eu augue. Phasellus vitae lacus a purus convallis commodo in nec leo. Sed feugiat, magna id lobortis tristique, risus nisl posuere eros, sit amet congue nibh tellus nec nisl. Fusce ante felis, luctus ac commodo eu, mattis vitae risus. Vivamus eget ex et erat pulvinar rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tincidunt sem vel consequat auctor. Donec cursus sapien eget metus hendrerit, in volutpat tellus efficitur. Morbi ultrices diam magna, id auctor ipsum placerat id. Maecenas imperdiet tempor erat, nec porta nisi dapibus sed. Vivamus iaculis, ex a tempor elementum, turpis magna vulputate est, vitae ullamcorper velit metus dictum nisi. Proin hendrerit lacus quis leo tincidunt elementum.",
      "Maby next commit these'll be loaded from json, for now I gottsa feed lambs"
    ]
  };
  $scope.mapImage="img/caterpie.svg";
}])
.directive("map", function(){
  return {
    restrict:"E",
    controller:"mapController",
    templateUrl:"map/map.html"
  }
});
