var around = document.getElementById('around');
var wirer = around.getContext('2d')
var colorArr1 = [];
var colorArr2 = [];
var colorArr3 = [];
var colorArrsl1 = [];
var colorArrsl2 = [];
var colorArrsl3 = [];
var stepdu = 0;
function getcolor(arr, length, a, b, c) {
	for (var i = 0; i < length; i++) {
	var R = parseInt(Math.random()*a);
	var G = parseInt(Math.random()*b);
	var B = parseInt(Math.random()*c);
	var A = Math.random();
	arr.push('rgba('+R+','+G+','+B+','+A+')');
	}
	return arr;
}
function colorGather (arr, a, b, c){
	var R = parseInt(Math.random()*a);
	var G = parseInt(Math.random()*b);
	var B = parseInt(Math.random()*c);
	var A = Math.random();
	arr[0] = 'rgba('+R+','+G+','+B+','+A+')';
	return arr[0];
}
colorArr1 = getcolor(colorArr1, 1300, 0, 255, 255);
colorArr2 = getcolor(colorArr2, 1300, 255, 0, 255);
colorArr3 = getcolor(colorArr3, 1300, 255, 255, 0);
colorArrsl1 = getcolor(colorArrsl1, 215, 0, 255, 255);
colorArrsl2 = getcolor(colorArrsl2, 215, 255, 0, 255);
colorArrsl3 = getcolor(colorArrsl3, 215, 255, 255, 0);


function drowAround () {
	if (!around.getContext) {
		return;
	}
	wirer.clearRect(0, 0, 1300, 215);
	wirer.save();
	for (var i = 1300 ; i >0 ; i--) {
		colorArr1[i] = colorArr1[i - 1];
		colorArr2[i] = colorArr2[i - 1];
		colorArr3[i] = colorArr3[i - 1];
		var y1 = 20*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40 - Math.PI/4) + 20;
		var y2 = 20*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40) + 20;
		var y3 = 20*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40 + Math.PI/4) + 20;
		var by1 = 17*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40 - Math.PI/4) + 197;
		var by2 = 17*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40) + 197;
		var by3 = 17*Math.sin(i*Math.PI/75 + stepdu*Math.PI/40 + Math.PI/4) + 197;
		wirer.fillStyle = colorArr1[i];
		wirer.fillRect(i, y1, 1.5, 1.5);
		wirer.fillRect(i, by1, 1.5, 1.5);
		wirer.fillStyle = colorArr2[i];
		wirer.fillRect(i, y2, 1.5, 1.5);
		wirer.fillRect(i, by2, 1.5, 1.5);
		wirer.fillStyle = colorArr3[i];
		wirer.fillRect(i, y3, 1.5, 1.5);
		wirer.fillRect(i, by3, 1.5, 1.5);
	}
	for (var i = 215; i > 0; i--) {
		colorArrsl1[i] = colorArrsl1[i - 1];
		colorArrsl2[i] = colorArrsl2[i - 1];
		colorArrsl3[i] = colorArrsl3[i - 1];
		var x1 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40 - Math.PI/4) + 25;
		var x2 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40) + 25;
		var x3 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40 + Math.PI/4) + 25;
		var bx1 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40 - Math.PI/4) + 1275;
		var bx2 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40) + 1275;
		var bx3 = 25*Math.sin(i*Math.PI/35 + stepdu*Math.PI/40 + Math.PI/4) + 1275;
		wirer.fillStyle = colorArrsl1[i];
		wirer.fillRect(x1, i, 1.5, 1.5);
		wirer.fillRect(bx1, i, 1.5, 1.5);
		wirer.fillStyle = colorArrsl2[i];
		wirer.fillRect(x2, i, 1.5, 1.5);
		wirer.fillRect(bx2, i, 1.5, 1.5);
		wirer.fillStyle = colorArrsl3[i];
		wirer.fillRect(x3, i, 1.5, 1.5);
		wirer.fillRect(bx3, i, 1.5, 1.5);
	}
	colorGather(colorArr1, 0, 255, 255);
	colorGather(colorArr2, 255, 0, 255);
	colorGather(colorArr3, 255, 255, 0);
	colorGather(colorArrsl1, 0, 255, 255);
	colorGather(colorArrsl2, 255, 0, 255);
	colorGather(colorArrsl3, 255, 255, 0);
	stepdu++;
	if (stepdu === 80) {
		stepdu = 0;
	}
	wirer.restore();
}
setInterval(drowAround, 17);