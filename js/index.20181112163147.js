(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/gro-2006.jpg' : 'images/gro-1003.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/88-544.png' : 'images/88-272.png');
$('.js-3').attr('src', (dpi>1) ? 'images/8-458.png' : 'images/8-229.png');
$('.js-4').attr('src', (dpi>1) ? 'images/555-402.png' : 'images/555-201.png');
$('.js-5').attr('src', (dpi>1) ? 'images/ren1-01-1260.png' : 'images/ren1-01-630.png');
$('.js-6').attr('src', 'images/zhu-ye2-1003.jpg');
$('.js-7').attr('src', 'images/zhu-ye3-1003.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/artboard-2004.jpg' : 'images/artboard-1002.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/zy--2006.jpg' : 'images/zy--1003.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/gro-1604.jpg' : 'images/gro-802.jpg');
$('.js-2').attr('src', (dpi>1) ? 'images/88-436.png' : 'images/88-218.png');
$('.js-3').attr('src', (dpi>1) ? 'images/8-366.png' : 'images/8-183.png');
$('.js-4').attr('src', (dpi>1) ? 'images/555-372.png' : 'images/555-186.png');
$('.js-5').attr('src', (dpi>1) ? 'images/ren1-01-1008.png' : 'images/ren1-01-504.png');
$('.js-6').attr('src', 'images/zhu-ye2-803.jpg');
$('.js-7').attr('src', 'images/zhu-ye3-803.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/artboard-1604.jpg' : 'images/artboard-802.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/zy--1606.jpg' : 'images/zy--803.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});