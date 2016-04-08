(function startup() {
  window.res = function(){
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    draw(el.getContext("2d"), [{
      x: el.width/2 - 150 , y: el.height/2 - 250 , src: 'ars-02'
    },{
      x: el.width/2 - 250, y: el.height/2 - 250 , src: 'ars-01'
    }
    ]);
  }
  var el = document.getElementsByTagName("canvas")[0];
  res();
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  window.addEventListener("resize", res, false);
  log("initialized.");
})();

(function(){
  window.sysv = {
    sx: 0,
    sy: 0,
    endx: 0,
    endy: 0,
    offsetx: 0,
    offsety: 0
  };
})();
