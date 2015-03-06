"use strict";

/* code for zooming the map */

module.exports=function(zoom){

  var map=document.getElementById("interactive");

  map.addEventListener("mousewheel", mousewheel);
	map.addEventListener("DOMMouseScroll", mousewheel);

  function mousewheel(e){
    e.preventDefault();
    zoom.x-=e.layerX;
    zoom.y-=e.layerY;
    zoom.amount+=e.wheelDeltaY;
    if (zoom.amount<zoom.min) zoom.amount=zoom.min;
    zoom.update();
  }

};
