var cunter = 0;
var bubble = document.querySelector("#bubble");
var ctx = bubble.getContext("2d");
var dots = [];
var arrIndex = 0;
var backColor = [ele0, ele1, ele2, ele3, ele4, ele5, ele6, ele7, ele8, ele9];
function ele0() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*77 + 178);
	var G = parseInt(Math.random()*50+ 50);
	var B = parseInt(Math.random()*50 + 50);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele1() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*30);
	var G = parseInt(Math.random()*100 + 100);
	var B = parseInt(Math.random()*77 + 178);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele2() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*100 + 155);
	var G = parseInt(Math.random()*0);
	var B = parseInt(Math.random()*77 + 178);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele3() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*150);
	var G = parseInt(Math.random()*50);
	var B = parseInt(Math.random()*0);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele4() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*50 + 50);
	var G = parseInt(Math.random()*30);
	var B = parseInt(Math.random()*30);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele5() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*100 + 130);
	var G = parseInt(Math.random()*155 + 100);
	var B = parseInt(Math.random()*155 + 100);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+R+','+R+','+A+')',
	}
}
function ele6() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*77 + 178);
	var G = parseInt(Math.random()*100 + 100);
	var B = parseInt(Math.random()*100 + 100);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele7() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*100);
	var G = parseInt(Math.random()*50 + 128);
	var B = parseInt(Math.random()*77 + 178);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele8() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*77 + 178);
	var G = parseInt(Math.random()*70 + 130);
	var B = parseInt(Math.random()*50);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function ele9() {
	var jd = Math.random()*Math.PI/2;
	var R = parseInt(Math.random()*50 + 50);
	var G = parseInt(Math.random()*0);
	var B = parseInt(Math.random()*77 + 178);
	var A = Math.random();
	return {
		x : Math.random()*400 + 400,
		y : 10,
		r : Math.random()*5,
		xa : -Math.sin(jd)*3 - 0.15,
		ya : Math.cos(jd)*3,
		yr : Math.random()*0.1,
		color : 'rgba('+R+','+G+','+B+','+A+')',
	}
}
function repeat(index){
	dots[index] = backColor[arrIndex]();
}
function draw() {
	if (!bubble.getContext) {
		return;
	}
	ctx.clearRect(0, 0, bubble.width, bubble.height);
	ctx.save();
	for(var i=0;i<200;i++){
		if (!dots[i]) {
			repeat(i);
		};
		var obj = dots[i]
		ctx.beginPath();
		ctx.fillStyle = obj.color;
		obj.r+=obj.yr
		if(obj.r < 10){
			obj.x += obj.xa;
			obj.y += obj.ya;
			ctx.arc(obj.x,obj.y,obj.r,0,Math.PI*2);
			ctx.fill();
		}else{
			var index = dots.indexOf(obj);
			repeat(index);
		}
	}
	ctx.restore();
}
var timeBubble = setInterval(draw,1000/60);