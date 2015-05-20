console.log('Problem 001 - results :');
var oddEvenCheck = function(num) {
	if (num % 2 === 0) {
		return false;
	}
	else {
		return true;
	}
};
var numbers = [3,2,-2,-3,0];
for (var i = 0; i < numbers.length ; i++) {
	console.log(numbers[i] + ' ' + oddEvenCheck(numbers[i]));
}
console.log('End of problem 001!');
console.log('===================');
console.log('Problem 002 - results :');
var divBySevenFive = function(num) {
	if (num % 5 === 0 && num % 7 === 0) {
		return true;
	}
	else {
		return false;
	}
};
var numbers = [3,0,5,7,35,140];
for (var i = numbers.length - 1; i >= 0; i--) {
	console.log(numbers[i] + ' ' + divBySevenFive(numbers[i]));
}
console.log('End of problem 002!');
console.log('===================');
console.log('Problem 003 - results :');
var rectArea = function(width,heigth) {
	return width * heigth;
};
var widths = [3,2.5,5];
var heigths = [4,3,5];
for (var i = widths.length - 1; i >= 0; i--) {
	console.log(widths[i] +'*'+ heigths[i] +' = ' + rectArea(widths[i],heigths[i]));
}
console.log('End of problem 003!');
console.log('===================');
console.log('Problem 004 - results :');
function sevenCheck(num) {
	if (Math.floor((num / 100) % 10) === 7) {
		return true;
	}
	else {
		return false;
	}
}
var numbers = [5,701,1732,9703,877,777877,9999799];
for (var i = numbers.length - 1; i >= 0; i--) {
	console.log(numbers[i] +' '+ sevenCheck(numbers[i]));
}
console.log('End of problem 004!');
console.log('===================');
console.log('Problem 005 - results :');
var numbers = [5,8,0,15,5343,62241];
var mask = 1;
var pos = 3;
var wantedBit = 0;
for (var i = numbers.length - 1; i >= 0; i--) {
	var temp = numbers[i] >> pos;
	wantedBit = temp& mask;
	console.log("Number: "+numbers[i] + "\n Bit:" + wantedBit);
}
console.log('End of problem 005!');
console.log('===================');
console.log('Problem 006 - results :');
//(x - h)*(x - h) + (y - k)*(y - k) = r * r 
var xCoord = [0,-5,-4,1.5,-4,100,0,0.2,0.9,2];
var yCoord = [1,0,5,-3,-3.5,-30,0,-0.8,-4.93,2.655];
var hCentre = 0;
var kCentre = 0;
var radius = 5;
var pointInCircle = function(x,y,hc,kc,r){
	var dx = x - hc;
	var dy = y - kc;
	var circle = (dx*dx) + (dy*dy);
	var diameter = r * r;
	var isInCircle = circle < (diameter);
	return isInCircle;
};
for (var i = 0; i < xCoord.length; i+=1) {
	console.log('K(0,0)5 P('+xCoord[i]+','+yCoord[i]+')');
	console.log(pointInCircle(xCoord[i],yCoord[i],hCentre,kCentre,radius));
}
console.log('End of problem 006!');
console.log('===================');
console.log('Problem 007 - results :');
var numbers = [1,2,3,4,9,37,97,51,-3,0];
var isPrime = true;
for (var i = 0; i < numbers.length; i+=1) {
	if (numbers[i] < 2) {
		console.log(numbers[i] +' - '+ !isPrime);
	}
	else if (numbers[i] === 3 || numbers[i] === 2) {
		console.log(numbers[i] +' - '+ isPrime);
	}
	else {
		if (numbers[i]%2 ===0) {
			console.log(numbers[i] +' - '+ !isPrime);
		}
		else if (numbers[i]%3 !==0 && numbers[i]%5 !==0 && numbers[i]%7 !==0 ) {
			console.log(numbers[i] +' - '+ isPrime);
		}
		else {
			console.log(numbers[i] +' - '+ !isPrime);
		}
	}
}
console.log('End of problem 007!');
console.log('===================');
console.log('Problem 008 - results :');
var aSizes = [5,2,8.5,100,0.222];
var bSizes = [7,1,4.3,200,0.333];
var hipos = [12,33,2.7,300,0.555];  
var getTrapezoidArea =  function(a,b,h) {
	return ((a+b)/2)*h;
};     
for (var i = 0; i < aSizes.length; i+=1) {
	console.log('A='+aSizes[i]+' B='+bSizes[i]+' H='+hipos[i]);
	console.log(getTrapezoidArea(aSizes[i],bSizes[i],hipos[i]));
}
console.log('End of problem 008!');
console.log('===================');
console.log('Problem 009 - results :');
var xCoord = [1,2.5,0,2.5,2,4,2.5,2,1,-100];
var yCoord = [2,2,1,1,0,0,1.5,1.5,2.5,-100];
var hCentre = 1;
var kCentre = 1;
var radius = 3;
var pointInCircle = function(x,y,hc,kc,r){
	var dx = x - hc;
	var dy = y - kc;
	var circle = (dx*dx) + (dy*dy);
	var diameter = r * r;
	var isInCircle = circle < (diameter);
	return isInCircle;
};
for (var i = 0; i < xCoord.length; i+=1) {
	console.log('K(1,1)3 P('+xCoord[i]+','+yCoord[i]+')');
	var checkRectangle = (xCoord[i] < -1) || (xCoord[i] > 5)|| (yCoord[i] < -1) || (yCoord[i] > 1); 
	var checkCircle = pointInCircle(xCoord[i],yCoord[i],hCentre,kCentre,radius);
	if (checkCircle && checkRectangle) {
		console.log('yes');
	}
	else {
		console.log('no');
	}
}
console.log('End of problem 009!');
console.log('===================');