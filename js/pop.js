
var pop = document.getElementById('pop')
var ctxpop = pop.getContext('2d');
var arrpop = [];
var mouseX;
var mouseY;
var flag = 0;
function popstart() {
	var jg = Math.random()*Math.PI*2;
	var R = parseInt(Math.random()*255);
	var G = parseInt(Math.random()*255);
	var B = parseInt(Math.random()*255);
	var A = 1;
	var x = parseInt(Math.random()*1294 + 3);
	var y = parseInt(Math.random()*1006 + 3);
	var	xa = Math.cos(jg)*5;
	var	ya = Math.sin(jg)*5;
	var bxa;
	var bya;
	return {x : x, y:y, xa:xa, ya: ya, bxa:bxa, bya:bya, color : 'rgba('+R+','+G+','+B+','+A+')'}
}
for (var i = 0; i < 1000; i++) {
	var obj = popstart();
	arrpop.push(obj)
}
pop.onmousedown = function(e){
	mouseX = e.pageX - pop.offsetLeft - 160;
	mouseY = e.pageY - pop.offsetTop - 55;
	flag = 1;
}
pop.onmouseup = function(e){
	flag = 0
}
function drow () {
	if (!pop.getContext) {
		return;
	}
	ctxpop.clearRect(0, 0, 1300, 1012)
	for (var i = 0; i < arrpop.length; i++) {
		var arrr = arrpop[i];
		if (arrr.x < 2 || arrr.x > 1296) {
			arrr.xa = -arrr.xa;
		}
		if (arrr.y < 2 || arrr.y > 1008) {
			arrr.ya = -arrr.ya;
		}
		if (flag === 0) {
			arrr.x = arrr.x + arrr.xa;
			arrr.y = arrr.y + arrr.ya;
			arrr.r = arrr.r + arrr.ra;
		}else{
			arrr.bxa = Math.sqrt((mouseX - arrr.x)*(mouseX - arrr.x))/Math.sqrt((mouseX - arrr.x)*(mouseX - arrr.x) + (mouseY - arrr.y)*(mouseY - arrr.y))*Math.abs(mouseX - arrr.x)/8;
			arrr.bya = Math.sqrt((mouseY - arrr.y)*(mouseY - arrr.y))/Math.sqrt((mouseX - arrr.x)*(mouseX - arrr.x) + (mouseY - arrr.y)*(mouseY - arrr.y))*Math.abs(mouseY - arrr.y)/8;
			arrr.x = mouseX > arrr.x ? arrr.x + arrr.bxa : arrr.x - arrr.bxa;
			arrr.y = mouseY > arrr.y ? arrr.y + arrr.bya : arrr.y - arrr.bya;
		}
		ctxpop.fillStyle = arrr.color;
		ctxpop.beginPath();
		ctxpop.arc(arrr.x, arrr.y, 2, 0, 2*Math.PI)
		ctxpop.fill();
	}
}
setInterval(drow,17);