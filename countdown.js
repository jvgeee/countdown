// Javascript Countdown Timer

var countFrom;
var inSeconds;
var counter;

var submit = document.getElementById("submit");
var theTime = document.getElementById("theTime");
var time = document.getElementById("time");


function resetPage(){
	submit.style.display = "inline-block";
	submit.innerHTML = "DO IT AGAIN!";
	theTime.style.display = "inline-block";
	theTime.value = "";
	time.innerHTML = "0:00";
}

function changeColour(){
	if ((inSeconds < 30) && (inSeconds > 20)){
		time.style.color = "#FF8000";
	}
	if ((inSeconds < 20) && (inSeconds > 10)){
		time.style.color = "#FF4000";
	}
	if ((inSeconds < 10) && (inSeconds > 0)){
		time.style.color = "#DF0101";
	}

}

function convertToTime(){
	var min = Math.floor(inSeconds / 60);
	var secs = inSeconds - (min * 60);

	if (secs < 10){
		secs = "0" + secs;
	}
	
	changeColour();

	counter = min + ":" + secs;	

}

function theCount(){
	convertToTime();
	if (inSeconds >= 0){
		inSeconds--;
	}
	if (inSeconds === -1){
		resetPage();
		clearInterval(intervalHandle);
		
	}
	
	time.innerHTML = counter;

}

document.getElementById("submit").onclick = function(){
	time.style.color = "#000000";	
	countFrom = theTime.value;
	if (isNaN(countFrom)){
		alert("You didn't enter a number!");
		return;
		}
	
	inSeconds = countFrom * 60;	

	convertToTime();
	
	time.innerHTML = counter;
	inSeconds--;

	intervalHandle = setInterval(theCount, 1000);
	
	submit.style.display = "none";
	theTime.style.display = "none";
	time.style.display = "block";
	

		
	return false;
}

