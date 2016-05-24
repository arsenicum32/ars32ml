(function startup() {
  window.res = function(){
    el.width = window.innerWidth;
    el.height = window.innerHeight;
    retina(el);
    var ind = 2;
    draw(el.getContext("2d"), [{
      x: el.width/2 - 150*ind , y: el.height/2 - 250*ind , src: 'ars-02', ac: 'changep'
    },{
      x: el.width/2 - 250*ind, y: el.height/2 - 250*ind , src: 'ars-01'
    },{
      src: 'ars-06', x: el.width/2 + 110*ind, y: el.height/2 - 320*ind
    },{
      src: 'ars-08', x: el.width/2 + 160*ind, y: el.height/2 + 220*ind
    },{
      src: 'ars-05', x: el.width/2 - 130*ind, y: el.height/2 + 250*ind
    },{
      src: 'ars-07', x: el.width/2 + 120*ind, y: el.height/2 - 200*ind
    },{
      src: 'chess', x: el.width/2 - 280*ind, y: el.height/2 - 180*ind
    },{
      src: 'ars3-04', x: el.width/2 - 150*ind, y: el.height/2 + 20*ind
    },{
      src: 'ars-11', x: el.width/2 + 100*ind, y: el.height/2 + 10*ind
    }
    ]);
  }
  var el = document.getElementsByTagName("canvas")[0];
  var bd = document.getElementsByTagName("body")[0];
  res();
  bd.addEventListener("touchstart", handleStart, false);
  bd.addEventListener("touchend", handleEnd, false);
  bd.addEventListener("touchcancel", handleCancel, false);
  bd.addEventListener("touchmove", handleMove, false);
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


function retina(cvs){
  var context = cvs.getContext("2d"),
      devicePixelRatio = window.devicePixelRatio || 1,
      backingStoreRatio = context.webkitBackingStorePixelRatio ||
                          context.mozBackingStorePixelRatio ||
                          context.msBackingStorePixelRatio ||
                          context.oBackingStorePixelRatio ||
                          context.backingStorePixelRatio || 1,

      ratio = devicePixelRatio / backingStoreRatio;
  if (true) {

      var oldWidth = cvs.width;
      var oldHeight = cvs.height;

      canvas.width = oldWidth * ratio;
      canvas.height = oldHeight * ratio;

      cvs.style.width = oldWidth + 'px';
      cvs.style.height = oldHeight + 'px';
      cvs.getContext("2d").scale(ratio, ratio);
  }
}
