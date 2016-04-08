(function startup() {
  window.res = function(){
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    draw(el.getContext("2d"), [{
      x: el.width/2 - 150 , y: el.height/2 - 250 , src: 'ars-02', ac: 'changep'
    },{
      x: el.width/2 - 250, y: el.height/2 - 250 , src: 'ars-01', ac: 'shake'
    },{
      src: 'ars-06', x: el.width/2 + 110, y: el.height/2 - 320, ac: 'shake'
    },{
      src: 'ars-08', x: el.width/2 + 160, y: el.height/2 + 220, ac: 'shake'
    },{
      src: 'ars-05', x: el.width/2 - 130, y: el.height/2 + 250, ac: 'shake'
    },{
      src: 'ars-07', x: el.width/2 + 120, y: el.height/2 - 200, ac: 'shake'
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
  window.onload = function(){
    draw.cn(0,0);
  }
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
