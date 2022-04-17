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

var startTimer = null; // gotta have this var to later hold the set interval


// START
startBtn.addEventListener('click', function(){ // addEventListener and 'click' will make the button do smth

    function startInterval(){         // defining the button function inside the event listener
        startTimer = setInterval(function() { // setInterval repeats a function with a fixed time delay (1000)
            timer(); // setinterval is repeating the timer function over and over at 1000
			fiveMinRem(); // fiveMinRem repeats -- always listening
        }, 1000);
    }
    startInterval(); // calling function

})



pauseBtn.addEventListener('click', function(){
	stopInterval()  // defined at bottom
})

// RESET
resetBtn.addEventListener('click', function() {  
	hr.value = 0; // sets hr number to 0
	min.value = 0;
	sec.value = 0;
	stopInterval()

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
var audio = new Audio('https://github.com/this-is-nisa/SAT-Timer/raw/main/Five-Minutes-Remaining-audio-clip.mp3'); // must have link address in github for audio (tutorial: https://www.youtube.com/watch?v=YrTzh2ZeoHM)
function fiveMinRem() { 
if (fiveMin.checked && hr.value == 0 && min.value == 5 && sec.value == 0) {

audio.play();
console.log("it worked"); }
return;
 }
 
 
//Timer function
function timer(){  // what is being repeated
if(hr.value == 0 && min.value == 0 && sec.value == 0) {
	hr.value = 0;
	min.value = 0;
	sec.value = 0;		
	}else if(sec.value != 0) {
	sec.value--;
} else if(min.value != 0 && sec.value == 0){
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


 


	 
