"use strict";

/* code for zooming the map */

module.exports=function(zoom){

  var map=document.getElementById("event-handler");
  var mapImage=document.querySelector("#interactive div:not([id='event-handler']");
  var clicking=false;
  var lastMouseMove=null;

  map.addEventListener("mousewheel", mousewheel, true);
	map.addEventListener("DOMMouseScroll", mousewheel, true);

  map.addEventListener("mousedown", function(e){
    e.preventDefault();
    if (e.button===0){
      clicking=true;
    }
  });
  map.addEventListener("mouseup", function(e){
    e.preventDefault();
    if (e.button===0){
      clicking=false;
      lastMouseMove=null;
    }
  });
  map.addEventListener("mouseout", function(e){
    clicking=false;
    lastMouseMove=null;
  });
  map.addEventListener("mousemove", function(e){
    e.preventDefault();
    if (clicking){
      if (lastMouseMove){
        var layer=getLayer(e);
        zoom.x+=layer.x-lastMouseMove.x;
        zoom.y+=layer.y-lastMouseMove.y;
        zoom.update();
      }
      lastMouseMove=getLayer(e);;
    }
  });


  function mousewheel(e){
    e.preventDefault();
    var oldCoorOnImage=getLayerPositionOnImage(e, zoom);
    var zoomDelta=(e.wheelDeltaY<0) ? -1:1;///200;
    zoom.amount+=zoomDelta;
    if (zoom.amount<zoom.min) {zoom.amount=zoom.min;}
    else{
      var imageCoor=getImageCoordinates(e, zoom);
      zoom.x -= imageCoor.x;
      zoom.y -= imageCoor.y;
      var coorOnImage=getLayerPositionOnImage(e, zoom, true);
      console.log(coorOnImage);
      zoom.x -= oldCoorOnImage.x*zoomDelta;
      zoom.y -= oldCoorOnImage.y*zoomDelta;
    }
    zoom.update();
  }

  function getLayer(e){

    var el = e.target,
        x = 0,
        y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }

    x = e.clientX - x;
    y = e.clientY - y;

    return { x:  e.offsetX, y: e.offsetY };

  }

  function getImageCoordinates(e, zoom){
    /* image real position with css transform (top-left origin) */
    return {
      x:zoom.x-(((mapImage.clientWidth *zoom.amount)-mapImage.clientWidth )/2),
      y:zoom.y-(((mapImage.clientHeight*zoom.amount)-mapImage.clientHeight)/2)
    };
  }

  function getLayerPositionOnImage (e, zoom, log){
    var imageCoor=getImageCoordinates(e, zoom),
        layer=getLayer(e);
    if (log){
      console.log(imageCoor);
      console.log(layer);
    }
    return {x:layer.x-imageCoor.x, y:layer.y-imageCoor.y}
  }

};
