
function setup() {
//   this line sets up the canvas that will be drawn on
// this makes it the size of the browser
// this is the only time you should use windowWidth,windowHeight
// after creating the canvas, use width and height
  createCanvas(windowWidth,windowHeight)

}

function draw() {
	let timeString = hour() + ":" + minute() + ":" + second()
	//console.log(timeString)

 background(255,252,238)

noStroke();

fill(232,28,33);
randomSeed(floor(frameCount / 40));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 50+n*5, 50+n*5);
}

fill(54,49,251);
randomSeed(floor(frameCount / 50));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 50+n*3, 50+n*3);
}


fill(251,154,113);
randomSeed(floor(frameCount / 30));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 20+n*2, 20+n*2);
}

fill(181,130,172);
randomSeed(floor(frameCount / 30));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 20, 20);
}

fill(119,90,211);
randomSeed(floor(frameCount / 40));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 30, 30);
}

fill(246,113,87);
randomSeed(floor(frameCount / 50));
for (var n=0; n<second(); n++)
  {   ellipse(random(width), random(height), 50, 50);
}


}