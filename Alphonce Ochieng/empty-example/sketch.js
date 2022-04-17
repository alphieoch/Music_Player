var song;
var rand = Math.random();
var BGcolour = [];
var Albumart = [];
var controls = ["play","pause","rewind"]
//^----For controls---------^----///
// var RGBcolour = random([1],[256]); <----old code but needed for future refence
function setup(){
  //load song in the backgorund
  song = loadSound('here.mp3');
  //end load song
  //-------------Colour generator---------//
  //For the colour randomly generating
  Red = random([1],[256]);
  RedAdj = Math.ceil(Red);
  append(BGcolour,RedAdj);
  //^converts the random number generated from a float to an interger using maths
  Green = random([1],[256]);
  GreenAdj = Math.ceil(Green);
  append(BGcolour,GreenAdj)
  //for^blue
  Blue = random([1],[256]);
  BlueAdj = Math.ceil(Blue);
  append(BGcolour,BlueAdj);
  //^seprate the colours^//
  //---using appending is easier it but it back into the array---//
  //----------------^ END OF COLOUR GENERATOR^---------------------//
  //--------------------------Start 

  //^seprate the colours^
  //-----the testing block------//
  console.log("hello :-)")
  console.log("The Colour for red is"+" "+ RedAdj)
  console.log("The Colour for Green is"+" "+ GreenAdj)
  console.log("The Colour for Green is"+" "+ BlueAdj)
  console.log("All togeather they make the RGB code"+" "+BGcolour)
  console.log("the window width is"+Albumart)
//----------End of tesing block-----------//
}
///-----------Start of User interface-----///
function draw(){
  createCanvas(windowWidth,500)
  //^set the page to resize with the page^//
  background(BGcolour);
  //---------code for play bar-----------// ;-)
  noFill();
  stroke(256);
  strokeWeight(4);
  rect(0,453,windowWidth,40)
  //Pause and play//
  //back button//
  button = createButton('<<< ');
  button.position(450,460);
  //back button//
  //pause button//
  button = createButton('play pause');
  button.position(500, 460);
  //pause button//
  // forwards  button//
  button = createButton('>>>> ');
  button.position(580, 460);
}
function mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
    }
function mouseReleased(){
}  
  }
