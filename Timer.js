export default class Timer {
	constructor(root) {
		
		console.log(root);
	}
	
	static getHTML(){
		return `
		
<span class="timer-part timer-part-hr">00</span>  

<span class="timer-part">:</span>
<span class="timer-part timer-part-min">00</span>
<span class="timer-part">:</span>
<span class="timer-part timer-part-sec">00</span>

<button type="button" class="timer-btn timer-btn-ctrl timer-btn-start"> 

<span class="material-icons">play_arrow</span>
</button>

<button type="button" class="timer-btn timer-btn-ctrl timer-btn-reset">
<span class="material-icons">restart_alt</span>
</button> 
		
		`
	}
	