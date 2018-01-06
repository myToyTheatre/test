

// set global variables


var sceneID =1; 


// initial controlCounter value

var sceneCountValue = 0;

//need to check why this is a global!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//var i=0;

var stopValue =0;

// stage direction variables for convenience I am using audience viewpoint to define left and right (opposite to theatre conventions) ..these are all values of x stage width is
//currently set at 710 px




var myMainTimerVariable;//main timer variable global and unique


//start of initialisation function called on HTML Page Load

function Init()
{

// position and switch on front piece
imagePosition("toyTheatreStudio",0,0);
imageTransparency("toyTheatreStudio", 1);
outputText("Welcome to Toy Theatre");

outputText("init")

//end of init function

}



// ---------------------------------------functions---------------------------


//start timer automatically on Init THIS WORKS

//startMyTimer();

// Functions called from Main Script Section



// new function image static position this works



function imagePosition(imageName, XPosition, YPosition)

{


var imageID = imageName;
var imageXPosition = XPosition;
var imageYPosition = YPosition;


document.getElementById(imageID).style.left = imageXPosition + 'px';
document.getElementById(imageID).style.top = imageYPosition + 'px';


   

}






//When function called 0 means transparent, 1 means opaque

function imageTransparency(imageName, transparencyValue)

{


var imageID = imageName;
var transparency = transparencyValue;

document.getElementById(imageID).style.opacity = transparency;

 }









//move image right

function moveImageRight (imageName, pxNumber, speed){

var imageID = imageName;

var currentPosition =  parseInt(document.getElementById(imageID).style.left);
var targetPosition = currentPosition + pxNumber;



var interval = speed;
var myVar = setInterval(myTimer, interval);

function myTimer() {

currentPosition = (currentPosition + 2);

if (currentPosition < targetPosition){



document.getElementById(imageID).style.left =  currentPosition + 'px';




}
else {
    clearInterval(myVar);
}

}
}



//move image left

function moveImageLeft (imageName, pxNumber, speed){

var imageID = imageName;

var currentPosition =  parseInt(document.getElementById(imageID).style.left);
var targetPosition = (currentPosition- pxNumber);
var interval = speed;
var myVar = setInterval(myTimer, interval);

function myTimer() {

currentPosition = (currentPosition - 2);

if (currentPosition > targetPosition){

document.getElementById(imageID).style.left =  currentPosition + 'px';



}

else {
    clearInterval(myVar);
}

}
}




//move image up

function moveImageUp (imageName, pxNumber, speed){

var imageID = imageName;

var currentPosition =  parseInt(document.getElementById(imageID).style.top);
targetPosition=currentPosition -pxNumber

var interval = speed;
var myVar = setInterval(myTimer, interval);

function myTimer() {

currentPosition = (currentPosition - 2);





if (currentPosition > targetPosition){

document.getElementById(imageID).style.top =  currentPosition + 'px';






}



else {
    clearInterval(myVar);
}

}
}



//move image down

function moveImageDown (imageName, pxNumber, speed){



var imageID = imageName;

var currentPosition =  parseInt(document.getElementById(imageID).style.top);

var targetPosition = currentPosition + pxNumber;


var interval = speed;
var myVar = setInterval(myTimer, interval);






function myTimer() {

currentPosition = (currentPosition + 2);





if (currentPosition < targetPosition){



document.getElementById(imageID).style.top =  currentPosition + 'px';




}

else {
    clearInterval(myVar);
}
}
}




//move actor1 right

//function moveActor1Right (xPosition, speed)

//{
//var i=0;

//var actorInterval = speed;

//var myVar = setInterval(myTimer, actorInterval);

//function myTimer() {

//i += 1;

//if (i < xPosition){


//actor1XPosition += 1;

//document.getElementById('actor1').style.left =  actor1XPosition + 'px';


//}
//}
//}

//move actor1 left


//function moveActor1Left (xPosition, speed)

//{
//var i=0;

//var actorInterval = speed;

//var myVar = setInterval(myTimer, actorInterval);

//function myTimer() {


//i += 1;

//if (i < xPosition){



//actor1XPosition-= 1;


//document.getElementById('actor1').style.left = actor1XPosition + 'px';


//}
//}
//}





///////////



//move actor2 right

//function moveActor2Right (xPosition, speed)

//{
//var i=0;

//var actorInterval = speed;

//var myVar = setInterval(myTimer, actorInterval);

//function myTimer() {

//i += 1;

//if (i < xPosition){


//actor2XPosition += 1;

//document.getElementById('actor2').style.left =  actor2XPosition + 'px';


//}
//}
//}

//move actor2 left


//function moveActor2Left (xPosition, speed)

//{
//var i=0;

//var actorInterval = speed;

//var myVar = setInterval(myTimer, actorInterval);

//function myTimer() {


//i += 1;

//if (i < xPosition){



//actor2XPosition-= 1;


//document.getElementById('actor2').style.left = actor2XPosition + 'px';


//}
//}
//}


//move Scenery left


//function movesceneryLeft (xPosition, speed)

//{
//var i=0;

//var actorInterval = speed;

//var myVar = setInterval(myTimer, actorInterval);

//function myTimer() {


//i += 1;

//if (i < xPosition){



//sceneryXPosition-= 1;


//document.getElementById('scenery').style.left = sceneryXPosition + 'px';


//}
//}
//}



//////////////

function more ()

{
window.location.href = "more.html";


}



//function mainCurtainMoveUp (yPosition, speed)

//{
//var i=0;

//var curtainInterval = speed;

//var myVar = setInterval(myTimer, curtainInterval);

//function myTimer() {

//i += 1;

//if (i < Math.abs(yPosition)){



//mainCurtainYPosition-= 1;

//document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';


//}
//}
//}



//function mainCurtainMoveDown (yPosition, speed)

//{
//var i=0;

//var curtainInterval = speed;

//var myVar = setInterval(myTimer, curtainInterval);

//function myTimer() {

//i += 1;

//if (i < Math.abs(yPosition)){


//mainCurtainYPosition += 1;

//document.getElementById('mainCurtain').style.top = mainCurtainYPosition + 'px';


//}
//}
//}



// fade-in function, 0 means transparent, 1 means opaque, bigger speed number means slower fade THIS WORKS


function fadeIn(imageName,speed){


//var i=1

var lightInterval =speed;
var imageID=imageName;
var myVar = setInterval(myTimer, lightInterval);

// see fix in fadeOut sub...made here also just for safety
//var lightOpacity = document.getElementById(imageID).style.opacity;
var lightOpacity = 1;



function myTimer() {

if (lightOpacity > 0){

lightOpacity -= 0.01;

document.getElementById(imageID).style.opacity = lightOpacity;



	
}
else {
    clearInterval(myVar);
}
}
}



function fadeOut(imageName,speed){


//var i=1



var lightInterval = speed;
var imageID=imageName;
var myVar = setInterval(myTimer, lightInterval);
//this does not work although appears to return 0
//var lightOpacity = (document.getElementById(imageID).style.opacity);

//outputText(lightOpacity);
// this cures problem!!!!!!!! but above returns zero???????????????????
var lightOpacity = 0

//outputText("hello i am here");
//outputText(lightOpacity);

function myTimer() {

//this is only looping once

//this is the problem line

//if statement does not work with returned style.opacity value
if (lightOpacity < 1){

lightOpacity += 0.01;

document.getElementById(imageID).style.opacity = lightOpacity;




	
}
else {
    clearInterval(myVar);
}
}
}








//function lightsUp(targetLightOpacity, speed){


//var lightInterval =speed


//var myVar = setInterval(myTimer, lightInterval);

//function myTimer() {

//if (lightOpacity > targetLightOpacity){

//lightOpacity -= 0.01;

//document.getElementById('fader').style.opacity = lightOpacity;

//}
//}
//}






//function lightsDown(targetLightOpacity, speed){


//var lightInterval=speed;


//var myVar = setInterval(myTimer, lightInterval);

//function myTimer() {

//if (lightOpacity < targetLightOpacity){

//lightOpacity += 0.01;

//document.getElementById('fader').style.opacity = lightOpacity;

//}
//}
//}




// this function gives me control of starting the timer 


function startMainTimer(){

//audio here for time being because og iPhone  restrictions

//var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
      //outputText("Play Traviata");

clearInterval(myMainTimerVariable);//prevents problems with clicking start timer button twice


myMainTimerVariable = setInterval(mainTimer ,500);

}






//main scene counter

function mainTimer() {
    sceneCountValue++;
	document.getElementById('sceneCount').innerHTML = sceneCountValue;
	directScene ();
}

//stops main timer

function stopMainTimer (){

clearInterval(myMainTimerVariable);

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

//audio here for iphone..works but only with Safari
	
var audio = new Audio('Audio/canCanSound.mp3');
   audio.play();
 
 


//Scene setup



// Initial Image Positions

imagePosition("streetFront", 0,0);
imagePosition("streetBack", 0,0);
imagePosition("baseStage",0,0);
imagePosition("spotlight", 0,0);
imagePosition("spotShadows",5,0);
imagePosition("mainCurtain", 0, -200);
imagePosition("proscenium", 0,0);
imagePosition("manHat", 0,0);
imagePosition("audience", 0, 800);
imagePosition("showBubble", 0,0);
imagePosition("credits", 0,0);
imagePosition("titleSheet", 0,0);
imagePosition("fader",0,0);
imagePosition("actor1",0,0);
imagePosition("actor2",-500,550);
imagePosition("actor3",-400,650);

// set image transparencies 0 means transparent, 1 means opaque

imageTransparency("streetFront", 1);
imageTransparency("streetBack", 1);
imageTransparency("baseStage", 0);
imageTransparency("spotlight", 0);
imageTransparency("spotShadows", 0);
imageTransparency("mainCurtain", 0);
imageTransparency("proscenium", 0)
imageTransparency("manHat", 0);
imageTransparency("audience", 0);
imageTransparency("showBubble",0);
imageTransparency("credits",0);
imageTransparency("titleSheet",0);
imageTransparency("fader", 0);
imageTransparency("actor1", 0);
imageTransparency("actor2", 1);
imageTransparency("actor3", 0);
imageTransparency("toyTheatreStudio", 0);

outputText("Start");





}



	

	
	if (sceneCountValue == 5){

	actor2.src= "images/manWalking.gif";
	
	moveImageRight ("actor2", 850, 30);
 
    outputText("Monsieur Chapeaux on-stage");
		
		//not playing audio on iPhone here..try put in cue sheet 1
    
    	//var audio = new Audio('Audio/canCanSound.mp3');
   // audio.play()
 
 
	}
	
	
	if (sceneCountValue == 20){

// doggy walking too
		
	imageTransparency("actor3", 1);
	
	moveImageRight ("actor3", 550, 60);
	
	
	//problem with reset of position in scene 2 not working if move right pixels over 1180
	//problem appears to be still walking and not caught by image postion statement in scene change
	
	// made scene change later and solved problem see below for resolution cant reset until move complete
		//moveImageRight ("actor3", 1200, 60);
 
    
 
	}
	
	

	if (sceneCountValue == 25){

	
	moveImageLeft ("streetFront", 1400, 30);
 
   
 
 
	}
	
	
	
	
	if (sceneCountValue == 63){

	
		actor2.src= "images/manStop1.png";
 
   
 	
 
	}
	
	
	if (sceneCountValue == 65){

	

 
   
 	actor3.src= "images/doggy2Stop.png";
 
	}
	
	if (sceneCountValue == 70){

	
		actor2.src= "images/manStop2.png";
 
   
 
 
	}
	
	
	
	if (sceneCountValue == 75){

	imagePosition("showBubble", 300,400);
		
 imageTransparency("showBubble",1);
 
 
	}
	
	
	
	if (sceneCountValue == 85){

	fadeOut ("fader", 30)
	 outputText("Scene Change");
 
	}
	
	
	if (sceneCountValue == 90){


imageTransparency("streetFront", 0);
imageTransparency("streetBack", 0);
imageTransparency("baseStage", 1);
imageTransparency("spotlight", 0);
imageTransparency("spotShadows", 0);
imageTransparency("mainCurtain", 1);
imageTransparency("proscenium", 1)
imageTransparency("manHat", 0);
imageTransparency("audience", 1);
imageTransparency("showBubble",0);
imageTransparency("credits",0);
imageTransparency("titleSheet",0);

imageTransparency("actor1", 1);
imageTransparency("actor2", 1);
imageTransparency("actor3", 0);
imageTransparency("toyTheatreStudio", 0);


//mr chapeaux
imagePosition("actor2",-500,600);
//doggy
imagePosition("actor3",-100,600);
// can can act
imagePosition("actor1",900,280);



actor1.src= "images/canCanR.gif";
actor2.src= "images/manWalking.gif";
actor3.src= "images/doggy2.gif";


	
 
	}
	
	
	
	if (sceneCountValue == 95){

	fadeIn ("fader", 30)
	 outputText("inside Moulin Rouge");
 
	}
	
	
	
	if (sceneCountValue == 100){
	
	
	imageTransparency("actor2", 1);

	moveImageRight ("actor2", 650, 20);
	
	
 
	}
	
	
	
	
	
	if (sceneCountValue == 110){
	
	
	actor2.src= "images/manStop1.png";
 
	}
	
	
	if (sceneCountValue == 115){
	
	
	actor2.src= "images/manStop2.png";
 
	}
	
	if (sceneCountValue == 120){
	
	
	imageTransparency("actor2", 0);
	imagePosition("manHat", 430,800);
	imageTransparency("manHat", 1);
	
	
 
	}
	
	
	
	
	
	
	if (sceneCountValue == 135){

moveImageUp ("mainCurtain", 900, 30);

 
	}
	
	
	
	if (sceneCountValue == 155){

imageTransparency("spotlight", 1);
imageTransparency("spotShadows", 1);

 
	}
	
	
	if (sceneCountValue == 170){
	
	
	imageTransparency("actor3", 1);
	
	
	
 

	outputText("mon chien!");

 
	}
	
	
	if (sceneCountValue == 180){
	
	
//dog walks across stage

	moveImageRight ("actor3", 900, 40);
		outputText("mon Dieu!");


 
	}
	
	
	if (sceneCountValue == 215){
	
	//can dancers on stage

     imageTransparency("actor1", 1);
     
     //can can dancers facing right
     actor1.src= "images/canCanR.gif";

	moveImageLeft ("actor1", 820, 10);
		outputText("act 1 on stage");


 
	}
	
	
	
	if (sceneCountValue == 265){
	
	

    // can can dancers off stage fast ..lower number higher speed

	moveImageLeft ("actor1", 820, 10);
		


 
	}
	
	
	if (sceneCountValue == 270){
	
	

    // doggy on stage

	
		actor3.src= "images/doggy2StopRight.png";
imagePosition("actor3",700,600);

outputText("doggy on stage");


 
	}
	
	
	if (sceneCountValue == 273){
	
	

    // doggy can can act on stage

	imageTransparency("actor3", 0);
		imagePosition("actor3",700,350);
		actor3.src= "images/canCanAct1.gif";

 
	}
	

	
	
	
	
	
	
	if (sceneCountValue == 275){
	
	

    // doggy on stage

	
		
		imageTransparency("actor3", 1);

	moveImageLeft ("actor3", 450, 5);

outputText("can can doggy on stage");


 
	}
	
	

	
	
	if (sceneCountValue == 290){
	
	

    // can can dancers of stage again facing left
      actor1.src= "images/canCanL.gif";

	moveImageRight ("actor1", 820, 5);
	moveImageRight ("actor3", 600, 5);
		


 
	}
	
	
	
	if (sceneCountValue == 368){
	
	
	actor1.src= "images/canCanStop.png";

	


 
	}
	
	if (sceneCountValue == 380){
	
	
	
	
actor1.src= "images/legsUp.gif";


 
	}
	
	if (sceneCountValue == 390){
	
	


	
actor1.src= "images/legsUp.gif";


 
	}
	
	
	


 
	
	
	
	
	if (sceneCountValue == 395){
	
	


	
moveImageDown ("mainCurtain", 900, 30);
 


 
 
	}
	
	
	
	//if (sceneCountValue == 39){
	
	//movesceneryLeft (1495,20);

	//}
	
	
	
	
	//if (sceneCountValue == 99){
	
	//actor2.src= "images/manStop1.png";
	//moveActor2Right (60, 20)

	//}
	
	
	//if (sceneCountValue == 105){
	
	//actor2.src= "images/manstop2.png";

	//}
	
	
	//if (sceneCountValue == 110){
	
//document.getElementById("showBubble").style.opacity = "1";
 

	//}
	
	
	//if (sceneCountValue == 111){
	
//imageTransparency("fader", .3);
 

	//}
	
	
	
	
	
	//not working
	
	
	//if (sceneCountValue == 115){
	
//fadeOut("fader", 60);
//fadeOut("fader");

//outputText("Fade out for scene change");

//}
	
	
	
	//if (sceneCountValue == 115){
	
//imageTransparency("fader", .3);
 

	//}
	
	
	//if (sceneCountValue == 116){
	
//imageTransparency("fader", .6);
 

	//}
	//if (sceneCountValue == 117){
	
//imageTransparency("fader", 1);
 
// }

	
	

	
	
	
	//if (sceneCountValue == 140){
	
	//moveActor2Left (800, 1)
	
	//imageTransparency("scenery", 0);
	//imageTransparency("streetBack", 0);
	//imageTransparency("baseStage", 1);
	//imageTransparency("spotlight", 0);
	//imageTransparency("spotShadows", 0);
	//imageTransparency("mainCurtain", 1);
	//imageTransparency("proscenium", 1);
	//imageTransparency("manHat", 1);
	//imageTransparency("audience", 1);
	//imageTransparency("showBubble", 0);
	//imageTransparency("credits", 0);
	//imageTransparency("titleSheet", 0);



//}
	
	


//if (sceneCountValue == 145){
	



//fadeIn("fader",60);



//outputText("Fade-in to Scene 2");
//}

	

	
	// document.getElementById("stage").style.opacity = "1";
//document.getElementById("spotlight").style.opacity = "0";
 //document.getElementById("spotShadows").style.opacity = "0";
 //document.getElementById("mainCurtain").style.opacity = "1";
 
 //document.getElementById("proscenium").style.opacity = "1";
 
 //document.getElementById("manHat").style.opacity = "1";
 //document.getElementById("audience").style.opacity = "1";
 
 
 //document.getElementById("fader").style.opacity = "0";
 

 //document.getElementById("credits").style.opacity = "0";
//document.getElementById("titleSheet").style.opacity = "0";

//document.getElementById("scenery").style.opacity = "0";

	//outputText("change scene");

	
	
	
	
	
	//if (sceneCountValue == 150){
	
//fadeOut("fader", 30);

//fadeIn("titleSheet", 40);

//outputText("Fade-in to Scene 2");
//}
	
	

	
	
	
	// if (sceneCountValue == 130){
	 //lightsUp(0,30);
	 
	 	//outputText("Fade-in to Moulin Rouge");
	
	
	
	//}
	
	 //if (sceneCountValue == 160){
	 
	  //outputText("Mr Chapeau is the House!");
	
	 
	
	//}
	
	
	 //if (sceneCountValue == 165){
	 
	 
	 //mainCurtainMoveUp(-1000,20)
	 //outputText("Curtain Up");
	
	//}
	
	
	//if (sceneCountValue == 205){
	 
	
	//document.getElementById("spotShadows").style.opacity = "1";
	//document.getElementById("spotlight").style.opacity = "1";
	

	
	//}
	
	
	//if (sceneCountValue == 215){
	 
	
//moveActor1Right (855, 5)
 //outputText("show starts");
	
	
	//}
	
	
	
	//if (sceneCountValue == 225){
	 
	
//actor1.src= "images/doggy.gif"
 //outputText("first act on stage");
	
	
	//}
	
	
	
	
	//if (sceneCountValue == 240){
	 
	
//moveActor1Left(855, 5)
 //outputText("first act leaves stage");
	
	
	//}
	
	
	//if (sceneCountValue == 245){
	 
	//actor1.src= "images/vectorGirlsStatic.png"
//moveActor1Right (855, 5)
// outputText("second act on stage");
 
 //}
	
	
	//if (sceneCountValue == 10){
	
		//actor1.src= "images/manWalking.gif";
//moveActor1Left  (555, 5)
 //outputText("manWalking on Stage");
 
 //var audio = new Audio('Audio/applause-1.ogg');
     //audio.play()
	//}
	
	
		//if (sceneCountValue == 100){
	
	
//moveActor1Right  (590, 5)
 //outputText("Female Soprano Steps Aside");
	//}
	
	
	
	//if (sceneCountValue == 105){
	 
	// actor2.src= "images/actor2IdleR.gif";
	
//moveActor2Right  (130, 5)
 //outputText("Male Soprano Centre Stage");
 
 
 
 // try audio here..does not work for iphone!!!!
 
 //var audio = new Audio('Audio/MIT_Symphony_Orchestra_-_14_-_La_Traviata_Brindisi_Verdi.mp3');
    //audio.play()
      //outputText("Play Traviata");

 

	//}
	
	//if (sceneCountValue == 150){
	 
	 //actor2.src= "images/BRO.gif";
	 // outputText("Male Sings");
	

	//}
	
	
	



	
	
	
	//if (sceneCountValue == 160){
	
	//actor2.src= "images/BLO.png";

 
	//}
	
	//if (sceneCountValue == 180){
	
	//actor2.src= "images/BRO.png";


 
	//}
	
	//if (sceneCountValue == 231){
	
	//actor2.src= "images/BRC.gif";
	//outputText("Chorus");


 
	//}
	
	
	
	//if (sceneCountValue == 247){
	
	//actor1.src= "images/GLO.png";
	//outputText("Lady Sings");


 
	//}
	
	//if (sceneCountValue == 327){
	
	//actor1.src= "images/GLC.gif";
	//outputText("Chorus");


 
	//}
	
	
	
	//if (sceneCountValue == 362){
	
	//actor1.src= "images/GLO.png";
	//outputText("Lady Sings");


 
	//}
	
	
	//if (sceneCountValue == 369){
	
	//actor2.src= "images/BRO.gif";
	//actor1.src= "images/GLC.gif";
	//outputText("Male Sings");


 
	//}
	
	
	
	
	
	//if (sceneCountValue == 376){
	 
	 //actor2.src= "images/BRC.gif";
	 //actor1.src= "images/GLO.png";
	  //outputText("Lady Sings");
	

	//}
	
	
	//if (sceneCountValue == 383){
	
	//actor2.src= "images/BRO.gif";
	//actor1.src= "images/GLC.gif";
	//outputText("Male Sings");
	
	//}


	
	
	//if (sceneCountValue == 395){
	 
	 //actor2.src= "images/BRO.gif";
	 //actor1.src= "images/GLO.png";
	 // outputText("Both Sing");
	

	//}
	
	//if (sceneCountValue == 437){
	 
	
	// actor1.src= "images/GLOarmV2.png";
	 
	

	//}
	
	
	//if (sceneCountValue == 442){
	
	 //actor1.src= "images/GLOarmV3.png";
	 
	

	//}
	
	
	//if (sceneCountValue == 451){
	 
	// actor2.src= "images/BRC.gif";
	 //actor1.src= "images/GLC.gif";
	  //outputText("Applause");
	

	//}
	
	
	//if (sceneCountValue == 457){
	//moveActor2Left (150, 10)
	//}
 
	
	
	
	
	//if (sceneCountValue == 462){
	 


	// moveActor1Left (200, 10)
 
	
	

	//}
	
	
	
	//if (sceneCountValue == 470){
	 
	
	// actor1.src= "images/GLCarmhigh.png";
	  
	

	//}
	
	//if (sceneCountValue == 480){
	

	 //actor1.src= "images/GLC.png";
	  
	

	//}
	
	//if (sceneCountValue == 487){
	 
	
	// actor1.src= "images/GLCarmhigh.png";
	  
	

	//}
	
	//if (sceneCountValue == 495){
	 
	
	// actor1.src= "images/GLCTwirl.gif";
	  
	

	//}
	
	
	
	
	


	
	//if (sceneCountValue == 520){
	
	
//moveActor2Right  (1200, 1)
 //outputText("Male Singer Moves Offstage");
 
 
	//}
	
	
	
	//if (sceneCountValue == 530){
	
	//moveActor1Left  (1000, 5)
 //outputText("Lady Singer Moves Offstage");
 
	
	

// }
 
 
 
	//if (sceneCountValue == 540){

	//lightsDown(1,60);
	 //outputText("Lights Down");
	 
	
	//}
	
	
	
	
	//if (sceneCountValue == 550){

	// mainCurtainMoveDown(1210,20)
	// outputText("Curtain Down");
	
	//}
	
	

	//stop action
	
	if (sceneCountValue == 450){
	
	outputText("End of Performance");

	stopMainTimer();
	
	}
	
	}
	
