var myFont;
var myFont2;
var myFont3;
var floralHeader;
var floralFooter;
var floralUnderline;
var planeImage;
var backgroundR=255;
var backgroundG=247;
var backgroundB=229;
var planeXInit=400;
var planeX=planeXInit;
var planeSizeInit=1;
var planeSize=planeSizeInit;
var outX=250;
var inX=1125-outX;

function preload(){
	myFont=loadFont('libraries/Amarillo.otf');
	myFont2=loadFont('libraries/brushed.otf');
	myFont3=loadFont('libraries/brushed2.otf')
	floralHeader=loadImage('assets/floralHeader.png');
	floralFooter=loadImage('assets/floralFooter.png');
	floralUnderline=loadImage('assets/floralUnderline.png');
	planeImage=loadImage('assets/plane.png');
}

function setup() {
	createCanvas(1125,2200);
	background(backgroundR,backgroundG,backgroundB);
	image(floralHeader,0,0,1125,454);
	image(floralFooter,0,height-359,1125,359);
	imageMode(CENTER);
	image(floralUnderline,width/2,750,1000,119);
	textFont(myFont);
  textSize(80);
	textAlign(CENTER,CENTER);
	fill(215,175,225);
	text("Happy",width/2,460);
	text("Mother's Day",width/2,620);
	textSize(45);
	fill(255,175,203);
	text("grant's outbound",width/2,880);
	text("grant's return",width/2,1300);

	//FLIGHTS
	textFont(myFont2);
	textSize(100);
	fill(215,175,225);
	textAlign(CENTER,CENTER);
		//OUTBOUND
	text("CMH",outX,1000);
	text("PHX",inX,1000);
		//RETURN
	text("PHX",outX,1420);
	text("DFW",inX,1420);
	text("DFW",outX,1670);
	text("CMH",inX,1670);

	//Flight Info
	textFont(myFont3);
	textSize(60);
	fill(0);
	text("7:43am",outX,1080);
	text("May 17",width/2,1080);
	text("9:21am",inX,1080);

	text("12:25pm",outX,1500);
	text("May 22",width/2,1500);
	text("4:49pm",inX,1500);

	text("6:30pm",outX,1750);
	text("May 22",width/2,1750);
	text("9:56pm",inX,1750);

	//Flight Rectangle
	rectMode(CENTER);
	noFill();
	stroke(255);
	strokeWeight(6);
	rect(width/2,1010,1000,370,20,20,20,20);
	rect(width/2,1550,1000,600,20,20,20,20);
}

function draw() {
	//background(230);
	fill(backgroundR,backgroundG,backgroundB);
	noStroke();
	imageMode(CENTER);
	rectMode(CENTER);
	rect(width/2,1010,375,100);
	rect(width/2,1430,375,100);
	rect(width/2,1680,375,100);
	//Plane Animation
	image(planeImage,planeX,1010,planeSize,planeSize);
	image(planeImage,planeX,1430,planeSize,planeSize);
	image(planeImage,planeX,1680,planeSize,planeSize);
	if (planeX<=width/2) {planeX+=2; planeSize++;}
	else if (planeX>=1125-planeXInit) {planeX=planeXInit; planeSize=planeSizeInit;}
	else {planeX+=2; planeSize--;}

}
