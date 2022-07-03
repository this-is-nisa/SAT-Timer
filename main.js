var startBtn = document.getElementById('startBtn');
var pauseBtn = document.getElementById('pauseBtn');
var resetBtn = document.getElementById('resetBtn');

var hr = document.getElementById('hours');
var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');

var fiveMin = document.getElementById('fiveMin');
var readingBtn = document.getElementById('readingBtn');
var writingBtn = document.getElementById('writingBtn');
var noCalcBtn = document.getElementById('noCalcBtn');
var calcBtn = document.getElementById('calcBtn');
var rHalftime = document.getElementById('rHalftime');
var wHalftime = document.getElementById('wHalftime');
var ncHalftime = document.getElementById('ncHalftime');
var cHalftime = document.getElementById('cHalftime');
var halfTime = document.getElementById('halfTime');

var startTimer = null; // gotta have this var to later hold the set interval


// START
startBtn.addEventListener('click', function(){ // addEventListener and 'click' will make the button do smth

    function startInterval(){         // defining the button function inside the event listener
        startTimer = setInterval(function() { // setInterval repeats a function with a fixed time delay (1000)
            timer(); // setinterval is repeating the timer function over and over at 1000
			fiveMinRem(); // fiveMinRem repeats -- always listening
			readingHalftime();
			writingHalftime();
			noCalcHalftime();
			calcHalftime();
			endBeep();
        }, 1000);
    }
    startInterval(); // calling function

})


// PAUSE
pauseBtn.addEventListener('click', function(){
	stopInterval()  // defined at bottom
	audioBeep.currentTime = 0; // to reset audio
})

//BEEP WHEN TIMER IS COMPLETE
var audioBeep = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/timerEndAudio.mp3');
function endBeep(){
	if (hr.value == 0 && min.value == 0 && sec.value == 0){
		audioBeep.play();
		console.log("works");
	}
}

// RESET
resetBtn.addEventListener('click', function() {  
	hr.value = 0; // sets hr number to 0
	min.value = 0;
	sec.value = 0;
	stopInterval()
	audioBeep.currentTime = 0;
	audioBeep.pause();
	

})


// READING
readingBtn.addEventListener('click', function(){
	hr.value = 1;
	min.value = 5;
	sec.value = 0;
	stopInterval()
	console.log("what");
})
//WRITING
writingBtn.addEventListener('click', function(){
	hr.value = 0;
	min.value = 35;
	sec.value = 0;
	stopInterval()
})
//NO CALC
noCalcBtn.addEventListener('click', function(){
	hr.value = 0;
	min.value = 25;
	sec.value = 0;
	stopInterval()
})
//CALC
calcBtn.addEventListener('click', function(){
	hr.value = 0;
	min.value = 55;
	sec.value = 0;
	stopInterval()
})

//FIVE MINUTES REMAINING FUNCTION
var audio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/Five-Minutes-Remaining-audio-clip.mp3'); // must have link address in github for audio (tutorial: https://www.youtube.com/watch?v=YrTzh2ZeoHM)
function fiveMinRem() { 
if (fiveMin.checked && hr.value == 0 && min.value == 5 && sec.value == 0) {
audio.play();
console.log("it worked"); }
return;
 }
/*
//FIXING HALFTIME
var rAudio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/32-min-remaining.mp3');
function readingHalftime() { 
if (halfTimealftime.checked && hr.value = && min.value == 32 && sec.value == 30) {
rAudio.play();
console.log("halftime"); }
return;
 }
*/

//READING HALFTIME
var rAudio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/32-min-remaining.mp3');
function readingHalftime() { 
if (rHalftime.checked && hr.value == 0 && min.value == 32 && sec.value == 30) {
rAudio.play();
console.log("it worked"); }
return;
 }

//WRITING HALFTIME 
var wAudio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/17-min-remaining.mp3');
function writingHalftime() {
if (wHalftime.checked && hr.value == 0 && min.value == 17 && sec.value == 30) {
wAudio.play();
console.log("it worked"); }
return;
 }
 
//NO CALC HALFTIME 
var ncAudio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/12-min-remaining.mp3');
 function noCalcHalftime() { 
if (ncHalftime.checked && hr.value == 0 && min.value == 12 && sec.value == 30) {
ncAudio.play();
console.log("it worked"); }
return;
 }
 
//CALC HALFTIME 
var cAudio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/audio/27-min-remainingmp3.mp3');
 function calcHalftime() { 
if (cHalftime.checked && hr.value == 0 && min.value == 27 && sec.value == 30) {
cAudio.play();
console.log("it worked"); }
return;
 }
 
 
//Timer function
function timer(){  // what is being repeated
if(hr.value == 0 && min.value == 0 && sec.value == 0) {
	hr.value = 0;
	min.value = 0;
	sec.value = 0;
}else if ((min.value > 60) && (sec.value > 60)) {
	hr.value = Math.floor(min.value / 60);
	min.value = Math.floor(min.value % 60);
	min.value = Math.floor(sec.value / 60);
	sec.value = Math.floor(sec.value % 60);
	
} else if (min.value > 60){  // makes min not go over 60
	hr.value = Math.floor(min.value / 60); // math.floor round to lowest // divide by 60 bc [hr*60 = min] , so get hr by itself [hr = min/60]
	min.value = Math.floor(min.value % 60); // the min will be the remainder of [min/60]
	
} else if (sec.value > 60){
	min.value = Math.floor(sec.value / 60); // [min*60 = sec] --> [min = sec/60]
	sec.value = Math.floor(sec.value % 60); // remainder of [sec/60]
	
}else if(sec.value != 0) {
	sec.value--;
	
}else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
		
}else if(hr.value != 0 && min.value == 0 && sec.value == 0){
        min.value = 59;
		sec.value = 59;
        hr.value--;
} 
return;
}

//Stop Function
function stopInterval(){
	clearInterval(startTimer); // clearInterval stops the setinterval repeats
}


 


	 
