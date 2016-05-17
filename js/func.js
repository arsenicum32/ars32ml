function draw(c, arr){
  for(var n in arr){
    arr[n].im = new Image();
    !arr[n].src? arr[n].im.src = '' : arr[n].im.src = mpath(arr[n].src);
    arr[n].im.onload = function(){
      if(!arr[n].x) arr[n].x = Math.floor(Math.random()*1000);
      if(!arr[n].y) arr[n].y = Math.floor(Math.random()*1000);
      c.drawImage(arr[n].im, arr[n].x , arr[n].y );
    }
  }
  draw.cn = function(x,y){
    clearCanvas(c, document.getElementsByTagName("canvas")[0] );
    for(var n in arr){
      var posx = arr[n].x + x;
      var posy = arr[n].y + y;
      if(arr[n].ac && typeof draw.action[arr[n].ac] === typeof function(){}){
        draw.action[arr[n].ac](c , arr[n].im, posx, posy, arr[n] );
      }else{
        c.drawImage(arr[n].im, posx , posy);
      }
    }
  }
  draw.action = {
    'shake': function(c ,im ,posx, posy){
      c.drawImage(im, posx + Math.floor(Math.random()* 20) , posy + Math.floor(Math.random()* 20));
    },
    'scalable': function(c, im, posx, posy, obj){
      function distanceScale(x,y){ /////// Понимаем дистанцию до объекта
        return window.innerWidth>window.innerHeight ?
        window.innerWidth:window.innerHeight
        /(Math.abs(x - sysv.endx) + Math.abs(y - sysv.endy));
      }
      var sl = 20*distanceScale( obj.x  , obj.y  );
      c.drawImage(im, posx - sl/2, posy - sl/2 , sl , sl);
    },
    'changep': function(c ,im ,posx, posy){
      (function(){
        if((new Date()).getTime() - draw.action.lastcall > 1000 ){
          draw.action.lastcall = (new Date()).getTime();
          im.src = mpath(['ars-02', 'ars3-01', 'ars2-02-sprite-2', 'ars2-02-sprite'][Math.floor(Math.random()*4)]);
          im.onload = function(){
            c.drawImage(im, posx , posy );
          }
        }else{
          c.drawImage(im, posx , posy );
        }
      })();
    },
    lastcall: (new Date()).getTime()
  }
}

function mpath(p){
  return 'images/'+p+'.png';
}

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}
var ongoingTouches = new Array();
function handleStart(evt) {
  //evt.preventDefault();
  log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    /////////
    sysv.sx = touches[i].pageX;
    sysv.sy = touches[i].pageY;
    ////////
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:" + i + ".");
  }
}
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log("continuing touch "+idx);
      ctx.beginPath();
      log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      /////////
    sysv.endx =  sysv.offsetx + (touches[0].pageX - sysv.sx) ;
    sysv.endy =  sysv.offsety + (touches[0].pageY - sysv.sy) ;
      draw.cn( sysv.endx , sysv.endy );
    ////////
    $('.item').each(function() {
            $(this).css('left', (parseInt($(this).attr('cx') || 0)) + sysv.endx  + 'px');
            $(this).css('top', (parseInt($(this).attr('cy') || 0)) + sysv.endy + 'px');
    })


    ////////

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
function handleEnd(evt) {
  //evt.preventDefault();
  log("touchend");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
      /////////////////

      sysv.offsetx = sysv.endx  ;
      sysv.offsety = sysv.endy  ;
        draw.cn( sysv.offsetx , sysv.offsety );
        ///////////////
    } else {
      log("can't figure out which touch to end");
    }
  }
}
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    ongoingTouches.splice(i, 1);  // remove it; we're done
  }
}
function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
function copyTouch(touch) {
  return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
}
function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found

}
function log(msg) {
  //var p = document.getElementsByTagName('p')[0];
  //p.innerHTML = '✕';//window.sysv.offx + ':';
  //console.log(sysv);
}
