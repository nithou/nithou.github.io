/* Plax version 1.3.1 *//*
  Copyright (c) 2011 Cameron McEfee

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/(function(e){function h(){return c==1?!1:window.DeviceOrientationEvent!=undefined}function p(e){x=e.gamma;y=e.beta;if(Math.abs(window.orientation)===90){var t=x;x=y;y=t}if(window.orientation<0){x=-x;y=-y}f=f==null?x:f;l=l==null?y:l;return{x:x-f,y:y-l}}function d(e){if((new Date).getTime()<r+n)return;r=(new Date).getTime();var t=s.offset()!=null?s.offset().left:0,f=s.offset()!=null?s.offset().top:0,l=e.pageX-t,d=e.pageY-f;if(l<0||l>s.width()||d<0||d>s.height())return;if(h()){if(e.gamma==undefined){c=!0;return}values=p(e);l=values.x/o;d=values.y/o;l=l<a?a:l>u?u:l;d=d<a?a:d>u?u:d;l=(l+1)/2;d=(d+1)/2}var v=l/(h()==1?u:s.width()),m=d/(h()==1?u:s.height()),g,y;for(y=i.length;y--;){g=i[y];newX=g.startX+g.inversionFactor*g.xRange*v;newY=g.startY+g.inversionFactor*g.yRange*m;g.background?g.obj.css("background-position",newX+"px "+newY+"px"):g.obj.css("left",newX).css("top",newY)}}var t=25,n=1/t*1e3,r=(new Date).getTime(),i=[],s=e(window),o=30,u=1,a=-1,f=null,l=null,c=!1;e.fn.plaxify=function(t){return this.each(function(){var n=-1,r={xRange:e(this).data("xrange")||0,yRange:e(this).data("yrange")||0,invert:e(this).data("invert")||!1,background:e(this).data("background")||!1};for(var s=0;s<i.length;s++)this===i[s].obj.get(0)&&(n=s);for(var o in t)r[o]==0&&(r[o]=t[o]);r.inversionFactor=r.invert?-1:1;r.obj=e(this);if(r.background){pos=(r.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2)return;x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y)return;r.originX=r.startX=x[2]||0;r.originY=r.startY=y[2]||0}else{var u=r.obj.position();r.obj.css({top:u.top,left:u.left,right:"",bottom:""});r.originX=r.startX=u.left;r.originY=r.startY=u.top}r.startX-=r.inversionFactor*Math.floor(r.xRange/2);r.startY-=r.inversionFactor*Math.floor(r.yRange/2);n>=0?i.splice(n,1,r):i.push(r)})};e.plax={enable:function(t){if(t){t.activityTarget&&(s=t.activityTarget||e(window));typeof t.gyroRange=="number"&&t.gyroRange>0&&(o=t.gyroRange)}e(document).bind("mousemove.plax",function(e){d(e)});h()&&(window.ondeviceorientation=function(e){d(e)})},disable:function(t){e(document).unbind("mousemove.plax");window.ondeviceorientation=undefined;if(t&&typeof t.restorePositions=="boolean"&&t.restorePositions)for(var n=i.length;n--;){layer=i[n];i[n].background?layer.obj.css("background-position",layer.originX+"px "+layer.originY+"px"):layer.obj.css("left",layer.originX).css("top",layer.originY)}t&&typeof t.clearLayers=="boolean"&&t.clearLayers&&(i=[])}};typeof ender!="undefined"&&e.ender(e.fn,!0)})(function(){return typeof jQuery!="undefined"?jQuery:ender}());