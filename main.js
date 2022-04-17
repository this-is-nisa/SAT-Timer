var startBtn = document.getElementById('startBtn');
var resetBtn = document.getElementById('resetBtn');

var hr = document.getElementById('hours');
var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');




var startTimer = null;

startBtn.addEventListener('click', function(){ // addEventListener and 'click' will make the button do smth
    //initialize the variable
    function startInterval(){         // we are also defining the function inside the event listener
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
	
})


function timer(){
if(hr.value == 0 && min.value == 0 && sec.value == 0) {
	hr.value = 0;
	min.value = 0;
	sec.value = 0;
} else if(sec.value != 0) {
	sec.value--;
} else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
}else if(hr.value != 0 && mmin.value == 0){
        min.value = 60;
        hr.value--;
    }
return;
}
resetBtn.addEventListener('click', function() { 
	hr.value = 0;
	min.value = 0;
	sec.value = 0;
	stopInterval()

})
function stopInterval(){
	clearInterval(startTimer);
}


 


	 
