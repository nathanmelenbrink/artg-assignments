/*
Programming Basics ARTG 2260
Nattamon Thaveetermsakul (Mona)
Assignment 1.1
Landscape - Sunset
*/

function setup() {
  var cnv = createCanvas(840,570);
  cnv.parent('sketch-holder');
  //background(#DDEDED);

noStroke();

// testing --> making gradient background using transparency
fill(0,150,150,10);
rect(0,0,840,500);

fill(0,150,150,10);
rect(0,25,840,500);

fill(0,150,150,10);
rect(0,50,840,500);

fill(0,150,150,10);
rect(0,75,840,500);

fill(0,150,150,10);
rect(0,100,840,500);

fill(0,150,150,10);
rect(0,125,840,500);

fill(200,0,0,5);
rect(0,150,840,500);

fill(200,0,0,5);
rect(0,175,840,500);

fill(200,0,0,5);
rect(0,200,840,200);

fill(200,0,0,5);
rect(0,225,840,500);

fill(200,0,0,5);
rect(0,250,840,200);

fill(200,0,0,5);
rect(0,275,840,500);

fill(200,0,0,5);
rect(0,300,840,200);

fill(200,0,0,5);
rect(0,325,840,500);

fill(200,0,0,6);
rect(0,350,840,200);

fill(200,0,0,6);
rect(0,375,840,500);

fill(200,0,0,6);
rect(0,400,840,200);

//sun
noStroke();
//fill(#FFFAA4);
ellipse(260,120,160,160);
fill(255,20,0,90);
ellipse(260,120,120,120);
fill(255,20,0,40);
ellipse(260,120,100,100);
fill(255,20,0,70);
ellipse(260,120,80,80);
fill(250,0,0,20);
ellipse(260,120,250,250);

//cloud #1
noStroke();
fill(255);
ellipse(200,100,100,60);
ellipse(250,100,30,30);
ellipse(230,80,30,30);
ellipse(232,122,30,30);
ellipse(232,122,30,30);
ellipse(203,126,30,30);
ellipse(174,122,30,30);
ellipse(157,102,30,30);
ellipse(157,102,30,30);
ellipse(157,102,30,30);
ellipse(172,80,30,30);
ellipse(201,73,30,30);

// cloud #2
noStroke();
fill(255);
ellipse(600,130,100,60);
ellipse(650,130,30,30);
ellipse(630,110,30,30);
ellipse(632,152,30,30);
ellipse(632,152,30,30);
ellipse(603,156,30,30);
ellipse(574,152,30,30);
ellipse(557,132,30,30);
ellipse(557,132,30,30);
ellipse(557,132,30,30);
ellipse(572,110,30,30);
ellipse(601,103,30,30);

// cloud #3
noStroke();
fill(255);
ellipse(340,160,100,60);
ellipse(390,160,30,30);
ellipse(370,140,30,30);
ellipse(372,182,30,30);
ellipse(372,182,30,30);
ellipse(343,186,30,30);
ellipse(314,182,30,30);
ellipse(297,162,30,30);
ellipse(297,162,30,30);
ellipse(297,162,30,30);
ellipse(312,140,30,30);
ellipse(341,133,30,30);

// cloud #4
noStroke();
fill(255);
ellipse(120,200,100,60);
ellipse(170,200,30,30);
ellipse(150,180,30,30);
ellipse(152,222,30,30);
ellipse(152,222,30,30);
ellipse(123,226,30,30);
ellipse(94,222,30,30);
ellipse(77,202,30,30);
ellipse(77,202,30,30);
ellipse(77,202,30,30);
ellipse(92,180,30,30);
ellipse(121,173,30,30);

// mountain #1
fill(100,120,0);
triangle(0,420,400,420,200,200);
fill(100,120,0);
triangle(0,490,200,220,100,280);
fill(100,120,0);
triangle(0,490,200,220,100,280);
fill(100,120,0);
triangle(200,250,400,420,280,260);

// mountain #1 (continue)
fill(140,85,0);
triangle(0,420,400,420,200,200);
fill(140,85,0);
triangle(0,490,200,220,100,280);
fill(140,85,0);
triangle(0,490,200,220,100,280);
fill(140,85,0);
triangle(200,250,400,420,280,260);

// foreground
fill(0,150,0);
rect(0,420,840,200);
ellipse(430,420,900,100);

// lake & rocks
fill(0,205,205);
ellipse(430,420,500,80);
ellipse(400,455,300,40);
fill(0,0,205,20);
ellipse(430,420,450,60);
ellipse(400,455,270,30);
fill(200,200,200);
ellipse(700,420,30,10);
ellipse(680,430,20,8);
fill(212,212,212);
ellipse(675,420,15,7);

// purple flower
fill(150,0,200);
ellipse(680,500,10,10);
ellipse(670,504,10,10);
ellipse(678,510,10,10);
fill(255,204,200);
ellipse(676,505,5,5);

// red flower
fill(190,0,100);
ellipse(600,500,10,10);
ellipse(590,504,10,10);
ellipse(598,510,10,10);
fill(255,204,200);
ellipse(596,505,5,5);

fill(190,0,100);
ellipse(100,500,10,10);
ellipse(90,504,10,10);
ellipse(98,510,10,10);
fill(255,204,200);
ellipse(96,505,5,5);

// dark blue flower
fill(30,100,190);
ellipse(620,530,10,10);
ellipse(610,534,10,10);
ellipse(618,540,10,10);
fill(255,204,200);
ellipse(616,535,5,5);

// bright red flower
fill(220,0,0);
ellipse(240,540,10,10);
ellipse(230,544,10,10);
ellipse(238,550,10,10);
fill(255,204,200);
ellipse(236,545,5,5);

// grasses
fill(0,120,0);
triangle(200,500,150,800,250,800);
fill(0,100,0);
triangle(180,400,160,800,200,800);
fill(0,110,0);
triangle(160,490,180,800,140,800);
fill(0,70,0);
triangle(140,450,160,800,120,800);
fill(0,100,0);
triangle(120,400,100,800,140,800);
fill(0,80,0);
triangle(90,490,110,800,80,800);
fill(0,50,0);
triangle(40,700,60,800,20,800);
fill(0,20,0);
triangle(20,500,40,800,0,800);

fill(0,70,0);
triangle(540,450,560,800,520,800);
fill(0,100,0);
triangle(520,490,500,800,540,800);

fill(0,70,0);
triangle(740,520,760,800,720,800);

fill(0,120,0);
triangle(400,500,350,800,450,800);
fill(0,100,0);
triangle(380,600,360,800,400,800);
fill(0,110,0);
triangle(360,590,380,800,340,800);
fill(0,70,0);
triangle(340,450,360,800,320,800);
fill(0,100,0);
triangle(320,400,300,800,340,800);
fill(0,80,0);
triangle(290,490,310,800,280,800);
fill(0,50,0);
triangle(240,700,260,800,220,800);
fill(0,20,0);
triangle(220,500,240,800,200,800);

//tree trunk
fill(130,80,0);
rect(750,200,13,290);

//leaves
fill(100,120,0);
triangle(700,420,810,420,755,120);
fill(100,140,0);
triangle(700,370,810,370,755,120);
fill(100,150,0);
triangle(705,320,805,320,755,120);
fill(100,160,0);
triangle(710,270,800,270,755,120);

// weird pink flower

fill(0,50,0);
rect(479,445,2,300);

var y;
var num = 14;

fill(205,5,150);
y = 450;
for(var i = 0; i < num; i++) {
  rect(470, y, 20, 10);
  y += 20;
}

// weird purple flower

fill(0,50,0);
rect(429,484,2,400);

fill(110,0,180);
rect(420,490,20,10);

fill(110,0,180);
rect(420,510,20,10);

fill(110,0,190);
rect(420,530,20,10);

fill(110,0,200);
rect(420,550,20,10);

// weird pink flower

fill(0,50,0);
rect(49,402,2,400);

fill(255,150,150);
rect(40,410,20,10);

fill(255,204,200);;
rect(40,430,20,10);

fill(255,150,150);
rect(40,450,20,10);

fill(255,204,200);
rect(40,470,20,10);

fill(255,150,150);
rect(40,490,20,10);

fill(255,204,200);
rect(40,510,20,10);

fill(255,150,150);
rect(40,530,20,10);


}