var planeImage;
var planeXInit=400;
var planeX=planeXInit;
var planeSizeInit=1;
var planeSize=planeSizeInit;
var pageImage;
var backgroundR=255;
var backgroundG=247;
var backgroundB=229;

function preload(){
	pageImage=loadImage('assets/pageExport.png');
	planeImage=loadImage('assets/plane.png');
}

function setup() {
	createCanvas(1125,2200);
	image(pageImage,0,0,1125,2200);
}

function draw() {
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
