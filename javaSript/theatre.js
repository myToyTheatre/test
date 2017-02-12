


var sceneID =1; 


sceneryXPosition =0
sceneryYPosition =0 

proceniumBackPartXPosition = 0;
proceniumBackPartYPosition = 850;

var actor1XPosition = 1000;
var actor1YPosition=460;


var actor2XPosition = -400;
var actor2YPosition = 450;



var faderXPosition = 0;
var faderYPosition = -110;


var mainCurtainXPosition=0
var mainCurtainYPosition=-70


//var inc = 1;//IS THIS STILL NEEDED

//initial opacity value of fader panel

var lightOpacity = 1.0;


// initial controlCounter value

var sceneCountValue = 0;

var i=0;

var stopValue =0;

// stage direction variables for convenience I am using audience viewpoint to define left and right (opposite to theatre conventions) ..these are all values of x stage width is
//currently set at 710 px


//used for function moveActor1XDirection(pixels, speed)

var z =0

var myVar3;//main timer variable global and unique







function Init()
{

  //prosceniumBackPart
  
  
document.getElementById('scenery').style.left = sceneryXPosition + 'px';
document.getElementById('scenery').style.top = sceneryYPosition+ 'px';
   
document.getElementById('proceniumBackPart').style.left = proceniumBackPartXPosition + 'px';
document.getElementById('proceniumBackPart').style.top = proceniumBackPartYPosition+ 'px';
   
  //actors 
document.getElementById('actor1').style.left = actor1XPosition + 'px';
document.getElementById('actor1').style.top = actor1YPosition + 'px';

document.getElementById('actor2').style.left = actor2XPosition + 'px';
document.getElementById('actor2').style.top = actor2YPosition + 'px';

document.getElementById('fader').style.left = faderXPosition + 'px';
document.getElementById('fader').style.top = faderYPosition + 'px';
  
document.getElementById('mainCurtain').style.left = mainCurtainXPosition + 'px';
document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';
 

   
}






//start timer automatically on Init THIS WORKS

//startMyTimer();



//move actor1 right

function moveActor1Right (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor1XPosition += 1;

document.getElementById('actor1').style.left =  actor1XPosition + 'px';


}
}
}

//move actor1 left


function moveActor1Left (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor1XPosition-= 1;


document.getElementById('actor1').style.left = actor1XPosition + 'px';


}
}
}





///////////



//move actor2 right

function moveActor2Right (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor2XPosition += 1;

document.getElementById('actor2').style.left =  actor2XPosition + 'px';


}
}
}

//move actor2 left


function moveActor2Left (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor2XPosition-= 1;


document.getElementById('actor2').style.left = actor2XPosition + 'px';


}
}
}



//////////////



function mainCurtainMoveUp (yPosition, speed)

{
var i=0;

var curtainInterval = speed;

var myVar = setInterval(myTimer, curtainInterval);

function myTimer() {

i += 1;

if (i < Math.abs(yPosition)){



mainCurtainYPosition-= 1;

document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';


}
}
}



function mainCurtainMoveDown (yPosition, speed)

{
var i=0;

var curtainInterval = speed;

var myVar = setInterval(myTimer, curtainInterval);

function myTimer() {

i += 1;

if (i < Math.abs(yPosition)){


mainCurtainYPosition += 1;

document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';


}
}
}



function lightsUp(targetLightOpacity, speed){


var lightInterval =speed


var myVar = setInterval(myTimer, lightInterval);

function myTimer() {

if (lightOpacity > targetLightOpacity){

lightOpacity -= 0.01;

document.getElementById('fader').style.opacity = lightOpacity;

}
}
}


function lightsDown(targetLightOpacity, speed){


var lightInterval=speed;


var myVar = setInterval(myTimer, lightInterval);

function myTimer() {

if (lightOpacity < targetLightOpacity){

lightOpacity += 0.01;

document.getElementById('fader').style.opacity = lightOpacity;

}
}
}




// this function gives me control of starting the timer 


function startMyTimer(){

//audio here for time being because og iPhone  restrictions

//var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
      //outputText("Play Traviata");

clearInterval(myVar3);//prevents problems with clicking start timer button twice


myVar3 = setInterval(myTimer ,500);

}






//main scene counter

function myTimer() {
    sceneCountValue++;
	document.getElementById('sceneCount').innerHTML = sceneCountValue;
	directScene ();
}

//stops main timer

function stopMyTimer (){

clearInterval(myVar3);

}




function resetScene ()

{

window.location.href = "index.html";

}


///////

function outputText(text){

var textValue = text;

document.getElementById('speakText').innerHTML = textValue;

}


//function playSound(){

 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
   // audio.play()
      //outputText("Play Traviata");
      

//}






//----------------------------------------------this is the main script for directing the action on the stage------------------------------------


function directScene()

{




if (sceneCountValue == 1){
	

outputText("Script Started");
// this audio now worked for iPhone but needs to be here and count ==1 cant stream 2 audios concurrently need to premix another way of generating a click event?


 // play Applause
 
//var audio = new Audio('Audio/applause-1.ogg');
   // audio.play()
     
  // outputText("Play Applause");

var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    audio.play()
      outputText("Play Traviata");

}
	
	
 	//raise the curtain
 	
 	if (sceneCountValue == 5){

	 mainCurtainMoveUp(-1000,10)
	 outputText("Curtain Up");
	
	}
	

// bring up the lights once curtain is raised

	if (sceneCountValue == 20){

	lightsUp(0,60);
	 outputText("Lights Up");
	 
	
	}
	
		//if (sceneCountValue == 15){
	 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
     // outputText("Play Traviata");
      
      
   
	 //}
	
	
	
	

	
	if (sceneCountValue == 40){

	
	//move actor 2 onstage set to boyBRC  Big, Right Facing, Mouth Closed
	
	actor2.src= "images/BRC.png";
	

moveActor2Right (540, 5)
 outputText("Male Soprano On Stage");
 
 // play Applause
 
//var audio = new Audio('Audio/applause-1.ogg');
    //audio.play()
     
   // outputText("Play Applause");
 
 
 
	}
	
	if (sceneCountValue == 45){
	
		actor1.src= "images/GLC.png";
moveActor1Left  (530, 5)
 outputText("Female Soprano On Stage");
 
 //var audio = new Audio('Audio/applause-1.ogg');
     //audio.play()
	}
	
	
	
	
	
		if (sceneCountValue == 50){
	
	
moveActor1Right  (150, 5)
 outputText("Female Soprano Steps Aside");
	}
	
	
	
	if (sceneCountValue == 55){
	 
	 actor2.src= "images/BRC.png";
	
moveActor2Right  (80, 5)
 outputText("Male soprano centre stage");
 
 
 
 // try audio here..does not work for iphone!!!!
 
 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
      //outputText("Play Traviata");

 

	}
	
	if (sceneCountValue == 60){
	 
	 actor2.src= "images/BRO.png";
	

	}
	
	
	



	
	
	
	if (sceneCountValue == 80){
	
	actor2.src= "images/BLO.png";

 
	}
	
	if (sceneCountValue == 90){
	
	actor2.src= "images/BRO.png";


 
	}
	
	if (sceneCountValue == 100){
	
	actor2.src= "images/BLO.png";


 
	}
	
	if (sceneCountValue == 107){
	
	actor2.src= "images/BRO.png";


 
	}
	
	
	if (sceneCountValue == 122){
	
	actor2.src= "images/BRC.png";
	
moveActor2Left  (170, 10)
 outputText("Male soprano move left");
 
 

	}
	
	
	
	
		if (sceneCountValue == 130){
	
	
moveActor1Left  (247, 5)
 
 
 outputText("Female Soprano moves centre stage");
 
 
 actor1.src= "images/GLC.png";

 
	}
	
	
		if (sceneCountValue == 140){
	
 
 actor1.src= "images/GLO.png";

 
	}
	
	if (sceneCountValue == 160){
	
 
 actor1.src= "images/GRO.png";

 
	}
	
	
	
		if (sceneCountValue == 180){
	
 
 actor1.src= "images/GLO.png";

 
	}
	
	
	if (sceneCountValue == 220){
	
 
 actor1.src= "images/GRO.png";

 
	}
	
	
	
	
		
	if (sceneCountValue == 240){
	
 
 actor1.src= "images/GLC.png";
 moveActor1Right  (120, 10)
 

 
	}
	
	
	if (sceneCountValue == 245){
	
 

 moveActor2Right  (100, 5)
 

 
	}
	
	
	
	
	
	if (sceneCountValue == 270){
	
 
 actor1.src= "images/GLO.png";


 
	}


	if (sceneCountValue == 278){
	
 

  actor2.src= "images/BRO.png";

 
	}
	
	
	if (sceneCountValue == 285){
	
 

  actor2.src= "images/BRC.png";

 
	}
	
	if (sceneCountValue == 291){
	
 

  actor2.src= "images/BRO.png";

 
	}
	
	
	if (sceneCountValue == 298){
	
 

  actor2.src= "images/BRC.png";

 
	}
	
	
	
	
	
	
	if (sceneCountValue == 303){
	
	 actor1.src= "images/GLO.png";
	 
	 actor2.src= "images/BRO.png";


 
 
	}
	
	
	
	if (sceneCountValue == 359){
	
	 actor1.src= "images/GLC.png";
	 
	 actor2.src= "images/BRC.png";


 
 
	}
	
	
	
	if (sceneCountValue == 370){
	
	 actor1.src= "images/GRC.png";
	 

	 
	 outputText("Actors take applause");
	 
	 }
 

	if (sceneCountValue == 380){
	
	 
	actor1.src= "images/GLC.png";
	 

	 
}



	
	
	

	if (sceneCountValue == 390){
	
	 actor2.src= "images/BLC.png";
	 
}
	
	
	
	if (sceneCountValue == 400){
	
	 actor2.src= "images/BRC.png";
	 
}
	
	

	
	if (sceneCountValue == 450){
	
	
moveActor1Left  (800, 5)
 outputText("Female Soprano moves off stage");
 
 
 
	}
	
	
	
	if (sceneCountValue == 452){
	
	
moveActor2Right  (500, 5)
 outputText("Male Soprano moves off stage");
 
 
 
	}
	
	
	
	if (sceneCountValue == 460){

	 mainCurtainMoveDown(570,20)
	 outputText("Curtain down");
	
	}
	
	

	//stop action
	
	if (sceneCountValue == 470){
	
	outputText("Script Ending");

	stopMyTimer();
	
	}
	
	}
	