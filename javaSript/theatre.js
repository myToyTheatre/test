


var sceneID =1; 


proceniumBackPartXPosition = 0;
proceniumBackPartYPosition = 0;

var actor1LeftFacingXPosition = 520;
var actor1LeftFacingYPosition=330;

var actor1RightFacingXPosition=530;
var actor1RightFacingYPosition=420;


var actor2LeftFacingXPosition = 0;
var actor2LeftFacingYPosition = 415;

var actor2RightFacingXPosition = 10;
var actor2RightFacingYPosition = 415;


var faderXPosition = 100;
var faderYPosition = 90;

//var dropCurtainXPosition=100
//var dropCurtainYPosition=250

var mainCurtainXPosition=140
var mainCurtainYPosition=250


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
document.getElementById('prosceniumBackPart').style.left = proceniumBackPartXPosition + 'px';
document.getElementById('prosceniumBackPart').style.top = proceniumBackPartYPosition+ 'px';
   
  //actors 
document.getElementById('actor1LeftFacing').style.left = actor1LeftFacingXPosition + 'px';
document.getElementById('actor1LeftFacing').style.top = actor1LeftFacingYPosition + 'px';




document.getElementById('actor1RightFacing').style.left = actor1RightFacingXPosition + 'px';
document.getElementById('actor1RightFacing').style.top = actor1RightFacingYPosition + 'px';



document.getElementById('actor2LeftFacing').style.left = actor2LeftFacingXPosition + 'px';
document.getElementById('actor2LeftFacing').style.top = actor2LeftFacingYPosition + 'px';




document.getElementById('actor2RightFacing').style.left = actor2RightFacingXPosition + 'px';
document.getElementById('actor2RightFacing').style.top = actor2RightFacingYPosition + 'px';


   
document.getElementById('fader').style.left = faderXPosition + 'px';
document.getElementById('fader').style.top = faderYPosition + 'px';
  
 
 
//document.getElementById('dropCurtain').style.left = dropCurtainXPosition + 'px';
//document.getElementById('dropCurtain').style.top = dropCurtainYPosition + 'px';

document.getElementById('mainCurtain').style.left = mainCurtainXPosition + 'px';
document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';
 

   
}






//start timer automatically on Init THIS WORKS

startMyTimer();



//move named actor right

function moveActor1LeftFacingRight (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor1LeftFacingXPosition += 1;

document.getElementById('actor1LeftFacing').style.left =  actor1LeftFacingXPosition + 'px';


}
}
}

//move named actor left


function moveActor1LeftFacingLeft (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor1LeftFacingXPosition-= 1;


document.getElementById('actor1LeftFacing').style.left = actor1LeftFacingXPosition + 'px';


}
}
}






///////////////////

//move named actor right

function moveActor1RightFacingRight (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor1RightFacingXPosition += 1;

document.getElementById('actor1RightFacing').style.left =  actor1RightFacingXPosition + 'px';


}
}
}

//move named actor left


function moveActor1RightFacingLeft (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor1RightFacingXPosition-= 1;


document.getElementById('actor1RightFacing').style.left = actor1RightFacingXPosition + 'px';


}
}
}



///////////



//move named actor right

function moveActor2LeftFacingRight (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor2LeftFacingXPosition += 1;

document.getElementById('actor2LeftFacing').style.left =  actor2LeftFacingXPosition + 'px';


}
}
}

//move named actor left


function moveActor2LeftFacingLeft (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor2LeftFacingXPosition-= 1;


document.getElementById('actor2LeftFacing').style.left = actor2LeftFacingXPosition + 'px';


}
}
}

/////////
//move named actor right

function moveActor2RightFacingRight (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {

i += 1;

if (i < xPosition){


actor2RightFacingXPosition += 1;

document.getElementById('actor2RightFacing').style.left =  actor2RightFacingXPosition + 'px';


}
}
}

//move named actor left


function moveActor2RightFacingLeft (xPosition, speed)

{
var i=0;

var actorInterval = speed;

var myVar = setInterval(myTimer, actorInterval);

function myTimer() {


i += 1;

if (i < xPosition){



actor2RightFacingXPosition-= 1;


document.getElementById('actor2RightFacing').style.left = actor2RightFacingXPosition + 'px';


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

clearInterval(myVar3);//prevents problems with clicking start timer button twice


myVar3 = setInterval(myTimer ,500);

}


//old config replaced by stop/start functions

//var myVar = setInterval(myTimer ,500);



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

window.location.href = "/Users/peterbennett/Desktop/2 Feb  Version/Index.html";

}



//function Scene1 ()

//{

//window.location.href = "/Users/peterbennett/Desktop/background tryout/backGroundImageV2.html";

//}


//function Scene2 ()

//{

//window.location.href = "http://www.w3schools.com/default.asp";

//}




function outputText(text){

var textValue = text;

document.getElementById('speakText').innerHTML = textValue;

}




//YESSSSSS THIS WORKS can use my main script!!!!!!!! NEED TO UPDATE REFERENCES

//function changeActor1Image(){

  //actor1.src= "/Users/peterbennett/Desktop/javascriptTheatre Tests/operaHouse/pics/actors/femaleActor3RightFacing .png";

//}

//----------------------------------------------this is the main script for directing the action on the stage------------------------------------


function directScene()

{

// experiment output text WORKS






// move actors to wings before curtain up

if (sceneCountValue == 1){
	
	
	//moveActor1RightFacingRight (500, 1)
	//moveActor1LeftFacingRight (500, 1)
	outputText("Script Started");
	
	}
	
	
if (sceneCountValue == 5){

	//moveActor2RightFacingLeft (0, 1)
	//moveActor2LeftFacingLeft (0, 1)
	}

	
 	
 	//raise the curtain
 	
 	if (sceneCountValue == 10){

	 mainCurtainMoveUp(-350,20)
	 outputText("Curtain Up");
	
	}
	

// bring up the lights once curtain is raised

	if (sceneCountValue == 20){

	lightsUp(0,30);
	 outputText("Lights Up");
	
	}
	
	
	
	// move actors on stage
	
	
//if (sceneCountValue == 30){
	
	
//moveActor2RightFacingRight (250, 10)
	//}
	
	
	if (sceneCountValue == 35){
	
	
moveActor1LeftFacingLeft  (280, 10)
 outputText("Soprano On Stage");
	}
	
	
	//if (sceneCountValue == 75){
	
	
	//moveActor2RightFacingLeft (250, 10)
	//}
	
	//if (sceneCountValue == 95){
	
	//changeActor1Image()
	//outputText("changing actor1 image");
	
	
	//}
	
	
	//if (sceneCountValue == 85){
	
	
	//moveActor1LeftFacingRight (300, 10)
	//}
	
	
	//if (sceneCountValue == 95){

	//lightsDown(1,30);
	//lightsDown(1,30);
	
	//}
	

	
	//if (sceneCountValue == 120){

	 //mainCurtainMoveDown (350,30);
	
	//}
	
	

	
	//stop action
	
	if (sceneCountValue == 140){
	
	outputText("Script Ending");

	stopMyTimer();
	
	
	}

	
//reset scene which will start automatically on Init ..ser start instruction in INIT THIS WORKS

//
	//if (sceneCountValue == 130){
	
	// resetScene ()

	//startMyTimer();
	
	
	//}





	
	
	

	//move Actor 2 on stage

	//if  (lightOpacity <0.1 && x3a < 250){
	
	//actor2MoveRight();
	
	//}  
	
	// Applause for actor2


// if (x3a==110) {
 
// var audio = new Audio('/Users/peterbennett/Desktop/javascriptTheatre Tests/operaHouse/sounds/StartApplause.mp3');
//audio.play()

//}

//Move Actor 1 on stage THIS WORKS

//if (lightOpacity <0.1 && x3a == 250){
	
	//moveActor1XDirection(-200, 30);
	
//console.log ("ACTOR1 ITERATION 1");
	
	//}
	
	//ok this  works by trial and error regarding selection of sceneCount Values but 
	//there is a problem with subsequent calls if scene count is too early befor previous call has had time to complete
	//need for a movement has completed that can be used in conditional statment?
	// need about 400 counts between movements on current settings
	//slow down scene counter??
	// below looks like values working but with reference to original value of actor1Xposition and reducing values not working VERY STRANGE
// this works

//if (sceneCountValue == 400){
	
	//moveActor1XDirection(200, 30);
	
	//console.log ( "first " + actor1XPosition);
	
	//}
	
	
	
	
	
	
	
	
	//play applause
	
//if  (x3 == 450){
	
	//var audio = new Audio('/Users/peterbennett/Desktop/javascriptTheatre Tests/operaHouse/sounds/large_indoor_crowd_applause_cheering_and_whistling.mp3');
//audio.play()

//}	


//Actors Sing

//if (sceneCountValue ==650) {
 
//var audio = new Audio('/Users/peterbennett/Desktop/javascriptTheatre Tests/operaHouse/sounds/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
//audio.play()

//}

 	
 // Actor 2 moves off stage ''''''''problem in moving!!! actor2 move left function not working!!!!!!!! right one works ok!!!!!! and actori move righr does.n't work either OK problem is its only executing ONCE 
 // Need to implement actor transform function
 	
 //if  (sceneCountValue > 700){
	
	//actor2MoveLeft();
	
//}  
 	
 	
 //actor 1 moves stage centre this works ok
 
 	
 	
//if  (sceneCountValue > 900 && x3 >200){
	
	//actor1MoveLeft();
	
	//}
	
	
	//if (sceneCountValue ==4600) {
 
//var audio = new Audio('/Users/peterbennett/Desktop/javascriptTheatre Tests/operaHouse/sounds/MIT_Symphony_Orchestra_-_03_-_Romeo_et_Juliette_Juliette_Waltz_Gounod.mp3');
//audio.play()

//}


//try closing curtain  not working either


 //if  (sceneCountValue > 1000){
	
	// curtainMoveDown();
	
//}  
 	



//this is end of directScene loop close bracket

//}
} 







