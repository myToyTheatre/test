


var sceneID =1; 


sceneryXPosition =0
sceneryYPosition =0 

stageXPosition = 0;
stageYPosition = 850;


controlsXPosition = 0;
controlsYPosition = 0;

var actor1XPosition = 1000;
var actor1YPosition=220;


var actor2XPosition = -400;
var actor2YPosition = 350;



var faderXPosition = 0;
var faderYPosition = -110;


var mainCurtainXPosition=0
var mainCurtainYPosition=-130


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
   
document.getElementById('stage').style.left = stageXPosition + 'px';
document.getElementById('stage').style.top = stageYPosition+ 'px';
   
  //actors 
document.getElementById('actor1').style.left = actor1XPosition + 'px';
document.getElementById('actor1').style.top = actor1YPosition + 'px';

document.getElementById('actor2').style.left = actor2XPosition + 'px';
document.getElementById('actor2').style.top = actor2YPosition + 'px';

document.getElementById('fader').style.left = faderXPosition + 'px';
document.getElementById('fader').style.top = faderYPosition + 'px';
  
document.getElementById('mainCurtain').style.left = mainCurtainXPosition + 'px';
document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';



document.getElementById('controls').style.left = controlsXPosition + 'px';
document.getElementById('controls').style.top = controlsYPosition + 'px';
 

   
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
	

outputText("play applause");
// this audio now worked for iPhone but needs to be here and count ==1 cant stream 2 audios concurrently need to premix another way of generating a click event?


 // play Applause
 
//var audio = new Audio('Audio/applause-1.ogg');
   // audio.play()
     
  // version with 15 secs silence then applause

var audio = new Audio('Audio/TraviataSA.mp3');
    audio.play()
      outputText("Orchestra Warm-up");
      
      // test for audio play start as potential aid to audio sync
      
      audio.onplay = function() {
    alert("Traviata has started to play");
}
}
	
	
 	//raise the curtain
 	
 	if (sceneCountValue == 15){

	 mainCurtainMoveUp(-1200,20)
	 outputText("Curtain Up");
	
	}
	

// bring up the lights once curtain is raised

	if (sceneCountValue == 25){

	lightsUp(0,120);
	 outputText("Lights Up");
	 
	
	}
	
		//if (sceneCountValue == 15){
	 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
     // outputText("Play Traviata");
      
      
   
	 //}
	
	
	
	

	
	if (sceneCountValue == 74){

	
	//move actor 2 onstage set to boyBRC  Big, Right Facing, Mouth Closed
	
	actor2.src= "images/actor2IdleR.gif";
	

moveActor2Right (550, 5)
 outputText("Male Soprano on Stage");
 
 // play Applause
 
//var audio = new Audio('Audio/applause-1.ogg');
    //audio.play()
     
   // outputText("Play Applause");
 
 
 
	}
	
	if (sceneCountValue == 90){
	
		actor1.src= "images/GLC.png";
moveActor1Left  (540, 5)
 outputText("Female Soprano 0n Stage");
 
 //var audio = new Audio('Audio/applause-1.ogg');
     //audio.play()
	}
	
	
	
	
	
		if (sceneCountValue == 100){
	
	
moveActor1Right  (590, 5)
 outputText("Female Soprano Steps Aside");
	}
	
	
	
	if (sceneCountValue == 105){
	 
	 actor2.src= "images/actor2IdleR.gif";
	
moveActor2Right  (130, 5)
 outputText("Male Soprano Centre Stage");
 
 
 
 // try audio here..does not work for iphone!!!!
 
 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
      //outputText("Play Traviata");

 

	}
	
	if (sceneCountValue == 150){
	 
	 actor2.src= "images/BRO.png";
	  outputText("Male Soprano Sings");
	

	}
	
	
	



	
	
	
	if (sceneCountValue == 160){
	
	actor2.src= "images/BLO.png";

 
	}
	
	if (sceneCountValue == 180){
	
	actor2.src= "images/BRO.png";


 
	}
	
	if (sceneCountValue == 200){
	
	actor2.src= "images/BLO.png";


 
	}
	
	if (sceneCountValue == 210){
	
	actor2.src= "images/BRO.png";


 
	}
	
	
	if (sceneCountValue == 220){
	
	actor2.src= "images/actor2IdleR.gif";
	
moveActor2Left  (200, 10)
 outputText("Male soprano move left");
 
 

	}
	
	
	
	
		if (sceneCountValue == 240){
	
	
moveActor1Left  (850, 5)
 
 
 outputText("Female Soprano moves centre stage");
 
 
 actor1.src= "images/GLC.png";

 
	}
	
	
		if (sceneCountValue == 250){
	
 
 actor1.src= "images/GLO.png";

 
	}
	
	if (sceneCountValue == 260){
	
 
 actor1.src= "images/GRO.png";

 
	}
	
	
	
		if (sceneCountValue == 270){
	
 
 actor1.src= "images/GLO.png";

 
	}
	
	
	if (sceneCountValue == 280){
	
 
 actor1.src= "images/GRO.png";

 
	}
	
	
	
	
		
	if (sceneCountValue == 240){
	
 
 actor1.src= "images/GLC.png";
 moveActor1Right  (120, 10)
 

 
	}
	
	
	if (sceneCountValue == 290){
	
 

 moveActor2Right  (100, 5)
 

 
	}
	
	
	
	
	
	if (sceneCountValue == 300){
	
 
 actor1.src= "images/GLO.png";


 
	}


	if (sceneCountValue == 320){
	
 

  actor2.src= "images/BRO.png";

 
	}
	
	
	if (sceneCountValue == 330){
	
 

  actor2.src= "images/actor2IdleR.gif";

 
	}
	
	if (sceneCountValue == 340){
	
 

  actor2.src= "images/BRO.png";

 
	}
	
	
	if (sceneCountValue == 350){
	
 

  actor2.src= "images/actor2IdleR.gif";

 
	}
	
	
	
	
	
	
	if (sceneCountValue == 360){
	
	 actor1.src= "images/GLO.png";
	 
	 actor2.src= "images/BRO.png";


 
 
	}
	
	
	
	if (sceneCountValue == 449){
	
	 actor1.src= "images/GLC.png";
	 
	 actor2.src= "images/actor2IdleR.gif";
	 
	  outputText("Sopranos stop singing");


 
 
	}
	
	
	
	if (sceneCountValue == 460){
	
	 actor1.src= "images/GRC.png";
	 

	 
	 outputText("Actors take applause");
	 
	 }
 

	if (sceneCountValue == 470){
	
	 
	actor1.src= "images/GLC.png";
	 

	 
}



	
	
	

	if (sceneCountValue == 480){
	
	 actor2.src= "images/actor2IdleR.gif";
	 
}
	
	
	
	if (sceneCountValue == 490){
	
	 actor2.src= "images/BRC.png";
	 
}
	
	

	
	if (sceneCountValue == 530){
	
	
moveActor1Left  (1000, 5)
 outputText("Female Soprano moves off stage");
 
 
 
	}
	
	
	
	if (sceneCountValue == 540){
	
	
moveActor2Right  (1000, 5)
 outputText("Male Soprano moves off stage");
 }
 
 
 
	if (sceneCountValue == 550){

	lightsDown(1,60);
	 outputText("Lights Down");
	 
	
	}
	
	
	
	
	if (sceneCountValue == 560){

	 mainCurtainMoveDown(1230,20)
	 outputText("Curtain down");
	
	}
	
	

	//stop action
	
	if (sceneCountValue == 570){
	
	outputText("Script Ending");

	stopMyTimer();
	
	}
	
	}
	
