

var timeInterval = 0;
function horseGoRight(){
	pony = document.getElementsByClassName('horse');//this code will get the classname
	for (var i = 0; i <4; i++) {//loop will start
		var horseSpeed = Math.ceil(Math.random()*(10-5)+5);//speed of the moving horse
       var ponyLeftSite = pony[i].offsetLeft;//horse's left position in the track
        pony[i].className = 'horse rider standRight runRight';//horse move right to the track
        pony[i].style.left = ponyLeftSite + horseSpeed + 'px';//code to move horse
        var ponyLeftSite = pony[i].offsetLeft;//position of horse after horse moved
        var movingRight = Math.round((ponyLeftSite/window.innerWidth)*100);//checks the window size
        var movingUp = Math.floor(Math.random()*5+75);//position of horse in the track
        if(movingRight == movingUp){//position check of the horse
        	clearInterval(timeInterval);//this code will clear the time interval
        	horseGoUp();//horseGoUp function called
        	timeInterval = setInterval(horseGoUp, 50);//function will called repeatedly
        }
	}
}

function horseGoUp(){
	pony = document.getElementsByClassName('horse');//this code will get the classname
		for(var i =0; i<4; i++){//loop started
			var horseSpeed = Math.ceil(Math.random()*(10-5)+5);//speed of the moving horse
			var ponyTopSite = pony[i].offsetTop;//top position of the horse
			pony[i].className = 'horse rider standUp runUp';//horse move up to the track
			pony[i].style.top = ponyTopSite - horseSpeed + 'px';//horse moving code
			var ponyTopSite = pony[i].offsetTop;//horse position after horse moved
			var movingTop = Math.round((ponyTopSite/window.innerHeight)*100);//checking the window size
			var movingLeft = Math.floor(Math.random()*(9-4)+4);//position of the horse
			if(movingTop == movingLeft){// this will check the position
				clearInterval(timeInterval);//this will clear the time interval
                horseGoLeft(); //calling horseGoLeft function
                timeInterval = setInterval(horseGoLeft, 50);//this code will call the function repeatedly
			}
		}
	}
 

function horseGoLeft(){
	pony = document.getElementsByClassName('horse');//this code will get the classname
	for (var i = 0; i <4; i++) {//starts the loop
		var horseSpeed = Math.ceil(Math.random()*(10-5)+5);//speed of the moving horse
       var ponyLeftSite = pony[i].offsetLeft;//left position of the horse
        pony[i].className = 'horse rider standLeft runLeft';//horse move left to the track
        pony[i].style.left = ponyLeftSite - horseSpeed + 'px';//moving code for horse
        var ponyLeftSite = pony[i].offsetLeft;//horse position after horse moved
        var movingRight = Math.round((ponyLeftSite/window.innerWidth)*100);//checking the window size
        var movingUp = Math.floor(Math.random()*(10-5)+5);//position of the horse
        if(movingRight == movingUp){// this will check the position
        	clearInterval(timeInterval);//this will clear the time interval
        	horseGoDown();//horseGoDown function will called
        	timeInterval = setInterval(horseGoDown, 50);//function will called repeatedly
        }
	}
}


function horseGoDown(){
	pony = document.getElementsByClassName('horse');//this code will get the classname
	for (var i = 0; i <4; i++) {//starts the loop
		var horseSpeed = Math.ceil(Math.random()*(10-5)+5);//speed of the moving horse
       var ponyDownSite = pony[i].offsetTop;//down position of the horse
        pony[i].className = 'horse rider standDown runDown';//horse move down to the track
        pony[i].style.top = ponyDownSite + horseSpeed + 'px';//moving code for horse
        var positionTop = pony[i].offsetTop;//horse position after horse moved
        var movingRight = Math.round((ponyDownSite/window.innerHeight)*100);//checking the window size
        var movingUp = Math.round(Math.random()*(80-75)+75);//position of the horse
        if(movingRight == movingUp){// this will check the position
        	clearInterval(timeInterval);//this will clear the time interval
        	horseHalt();//horseHalt function will called
        	timeInterval = setInterval(horseHalt, 50);//function will called repeatedly
        }
	}
}

function horseHalt(){
pony = document.getElementsByClassName('horse');//this code will get the classname
	for (var i = 0; i <4; i++) {//starts the loop
		var horseSpeed = Math.ceil(Math.random()*(10-5)+5);//speed of the moving horse
       var ponyLeftSite = pony[i].offsetLeft;//left position of the horse
        pony[i].className = 'horse rider standRight runRight';//horse move right to the track
        pony[i].style.left = ponyLeftSite + horseSpeed + 'px';//moving code for horse
        var ponyLeftSite = pony[i].offsetLeft;//checks the left position
        var movingRight = Math.round((ponyLeftSite/window.innerWidth)*100);//move to right position
        // var movingUp = Math.floor(Math.random()*(30-15)+15);
        if(movingRight == 35){
        	clearInterval(timeInterval);//this will clear the time interval
        	timeInterval = setInterval(raceGameEnd, 50);//function will called repeatedly
        }
	}
}

	
//creatin function to end up the game
function raceGameEnd(){
	pony = document.getElementsByClassName('horse');
	for (var i = 0; i <4; i++) {
		pony[i].className = 'horse standRight';
	}
}

//creating function to check the bet amount and other label
function betAmountChecker(){
	var pound = 100;
	var raceLap = document.getElementById('lap_number').value;
	var raceLaps = Math.ceil(parseInt(raceLap));

	var betPound = document.getElementById('Amount').value;
	var betPounds = Math.ceil(parseInt(betPound));
	//using conditional statement
	if (betPounds > pound)//if this condition's true
	{
		alert("You are betting more than you have");//this will display
	}
	else if (betPounds <= 0)
	{
		alert("You can't bet null amount");
	}
	else if (raceLaps<1)
	{
		alert("Assign lap number more than 1 ")
	}
	else
	{
		horseStart();//horseStart function will called at last
	}
}

//creating function to start the race
function horseStart(){
clearInterval(timeInterval);
horseGoRight();
timeInterval = setInterval(horseGoRight, 50);
}

//creating function for click event
function myGameEvent(){
	var raceStart = document.getElementById('start');
	raceStart.addEventListener('click', betAmountChecker);
}

document.addEventListener('DOMContentLoaded', myGameEvent);