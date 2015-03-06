"use strict";

/* code for zooming the map */

module.exports=function(zoom){

  var map=document.getElementById("interactive");
  var clicking=false;
  var lastMouseMove=null;

  map.addEventListener("mousewheel", mousewheel);
	map.addEventListener("DOMMouseScroll", mousewheel);
  map.addEventListener("mousedown", function(e){
    e.preventDefault();
    if (e.button===0){
      clicking=true;
      console.log("mousedown");
    }
  });
  map.addEventListener("mouseup", function(e){
    e.preventDefault();
    if (e.button===0){
      clicking=false;
      lastMouseMove=null;
      console.log("mouseup");
    }
  });
  map.addEventListener("mouseout", function(e){
    clicking=false;
    lastMouseMove=null;
    console.log("mouseout");
  });
  map.addEventListener("mousemove", function(e){
    e.preventDefault();
    if (clicking){
      if (lastMouseMove){
        zoom.x+=e.layerX-lastMouseMove.x;
        zoom.y+=e.layerY-lastMouseMove.y;
        zoom.update();
      }
      lastMouseMove={x:e.layerX, y:e.layerY};
    }
  });


  function mousewheel(e){
    e.preventDefault();
    zoom.amount+=e.wheelDeltaY/300;
    if (zoom.amount<zoom.min) {zoom.amount=zoom.min;}
    else{
      zoom.x -= (e.clientX-(map.clientWidth/2));
      zoom.y -= (e.clientY-(map.clientHeight/2));
    }
    zoom.update();
  }



};
