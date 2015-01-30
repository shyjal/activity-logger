var Activity = function() {
	var that = this;

	var singleActivity;
	var timerTemplate = '<td width="22%"><span class="timer">00 :: 00 :: 00</span><td>';
	var actionsTemplate = '<td width="38%"><button class="start buttonclass">Start</button><button class="pause">Pause</button><button class="stop">Stop</button><td>';
	var timer;
	var timerActive=false;
	var counter = 1;

	var updateTime= function(totalSec){
		var hours = parseInt( totalSec / 3600 ) % 24;
		var minutes = parseInt( totalSec / 60 ) % 60;
		var seconds = totalSec % 60;
		var standardCounter=("0" + hours).slice(-2)+' :: '+("0" + minutes).slice(-2)+' :: '+("0" + seconds).slice(-2);
		singleActivity.querySelector('.timer').innerHTML = standardCounter;
	}

	this.create = function(activityName) {
		console.log('created activity : ' + activityName);

		//Creating dom element for one activity
		singleActivity = document.createElement('tr');
		singleActivity.setAttribute('class', 'activity');

		singleActivity.innerHTML += '<td width="40%">'+activityName + ' </td>';
		singleActivity.innerHTML += timerTemplate;
		singleActivity.innerHTML += actionsTemplate;

		//Appends created element
		document.getElementById('activitybox').appendChild(singleActivity);

		//Start timer
		timer = setInterval(function() {
			updateTime(counter++);
		}, 1000);
		timerActive=true;



		//Event listeners for buttons

		singleActivity.querySelector('.start').addEventListener('click', function(e) {
			that.start();
		});

		singleActivity.querySelector('.pause').addEventListener('click', function(e) {
			that.pause();
		});

		singleActivity.querySelector('.stop').addEventListener('click', function(e) {
			that.stop();
		});
	}
	this.start = function() {
		if(timerActive==false){
			timer = setInterval(function() {
				updateTime(counter++);
			}, 1000);
			timerActive=true;
		}
	}

	this.pause = function() {
		if(timerActive==true){
			clearInterval(timer);
			timerActive=false;
		}

	}

	this.stop = function() {
		
		clearInterval(timer);
		counter=0;
		timerActive=false;
		
	}

	


}