var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e902e13e-960d-4b2b-8e3e-a98cd6163780","5043683c-7890-4d7e-8fa2-3ca8afb3d32d","0f1d1631-3551-4879-89ec-bbb58da786b6","766d7328-a0d1-4d88-934f-caa32e4c2ad2"],"propsByKey":{"e902e13e-960d-4b2b-8e3e-a98cd6163780":{"name":"paddle1","sourceUrl":"assets/api/v1/animation-library/gamelab/bBPqf9VOcHnChLsezQVA9xUqmzX0ya7H/category_stickers/sticker_15.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bBPqf9VOcHnChLsezQVA9xUqmzX0ya7H","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bBPqf9VOcHnChLsezQVA9xUqmzX0ya7H/category_stickers/sticker_15.png"},"5043683c-7890-4d7e-8fa2-3ca8afb3d32d":{"name":"paddle2","sourceUrl":null,"frameSize":{"x":360,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"a4T8mDNG9grn9wNGDGDp1nK3_EfJqXZ9","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":350},"rootRelativePath":"assets/5043683c-7890-4d7e-8fa2-3ca8afb3d32d.png"},"0f1d1631-3551-4879-89ec-bbb58da786b6":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/XlORbJ0GLePfvHk9yHlt96ZWrQx1HVTD/category_stickers/neonheart_13.png","frameSize":{"x":358,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"XlORbJ0GLePfvHk9yHlt96ZWrQx1HVTD","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":358,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XlORbJ0GLePfvHk9yHlt96ZWrQx1HVTD/category_stickers/neonheart_13.png"},"766d7328-a0d1-4d88-934f-caa32e4c2ad2":{"name":"paddle3","sourceUrl":"assets/api/v1/animation-library/gamelab/ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ/category_stickers/sticker_12.png","frameSize":{"x":398,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ds6tFbUz6rK49A8_WcKlK4eGrPOLsmcZ/category_stickers/sticker_12.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Fila 1
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor = rgb(255,10,50);

var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor = rgb(95,10,255);

var box3 = createSprite(125, 75, 50, 50); 
box3.shapeColor = rgb(255,10,50); 

var box4 = createSprite(175, 75, 50, 50); 
box4.shapeColor = rgb(95,10,255); 

var box5 = createSprite(225, 75, 50, 50); 
box5.shapeColor = rgb(255,10,50); 

var box6 = createSprite(275, 75, 50, 50); 
box6.shapeColor = rgb(95,10,255); 

var box7 = createSprite(325, 75, 50, 50); 
box7.shapeColor = rgb(255,10,50); 

var box8 = createSprite(375, 75, 50, 50); 
box8.shapeColor = rgb(95,10,255); 

//Fila 2
var box9 = createSprite(75, 125, 50, 50); 
box9.shapeColor = rgb(255,10,50); 

var box10 = createSprite(25, 125, 50, 50);
box10.shapeColor = rgb(95,10,255);

var box11 = createSprite(125, 125, 50, 50); 
box11.shapeColor = rgb(95,10,255); 

var box12 = createSprite(175, 125, 50, 50); 
box12.shapeColor = rgb(255,10,50); 

var box13 = createSprite(225, 125, 50, 50); 
box13.shapeColor = rgb(95,10,255); 

var box14 = createSprite(275, 125, 50, 50); 
box14.shapeColor = rgb(255,10,50); 

var box15 = createSprite(325, 125, 50, 50); 
box15.shapeColor = rgb(95,10,255); 

var box16 = createSprite(375, 125, 50, 50); 
box16.shapeColor = rgb(255,10,50); 

//Paleta, pelota, puntos, segundos
var paddle=createSprite(200,365,90,15);
 paddle.setAnimation("paddle1");
 paddle.scale = 0.3;
var ball=createSprite(200,200,20,20);
 ball.setAnimation("ball");
 ball.scale = 0.15;
var score = 0;
var gameState = "iniciar";
//
function draw() {
  background("indianred");
  
  Cajas();
  
  textSize(23);
  stroke("black");
  fill(rgb(45, 0, 13));
  text("Puntuación: " + score, 10 ,35);
  
  createEdgeSprites();
  
  //function
  destruirCajas();
  cambiarEstadoJuego();
  
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  
  ball.bounceOff(paddle);
  
  drawSprites();
}
//
function cambiarEstadoJuego() {
  if (gameState == "iniciar" ) {
   fill("red");
   textSize(20);
   text("Presiona espacio para empezar",60,250);
   //
  if (keyDown("space")){
   ball.velocityX = 5;
   ball.velocityY = 5;
   gameState = "jugar";
  }
}
  if (gameState == "jugar") {
    if (keyDown("right")){
    paddle.x = paddle.x +8;
    }
    if (keyDown("left")){
    paddle.x = paddle.x -8;
    }
    //
    if(ball.y > 380 || score > 38 ) {
      gameState = "final";   
    }
  }
  if (gameState == "final") {
    
   if (ball.y >= 370){
    paddle.setAnimation("paddle2");
    textSize(50);
    fill("black");
    text("Game Over", 70,250);
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  
   if (score > 38){
    paddle.setAnimation("paddle3");
    ball.velocityX = 0;
    ball.velocityY = 0;
    paddle.x = 200;
    paddle.y = 200;
    textSize(50);
    fill("yellow");
    text("You Win", 110,300);
  }
 }
}
//
function destruirCajas(){
  if (ball.isTouching(box1)){
    ball.bounceOff(box1);
    box1.destroy();
    score = score +3;
  }
  if (ball.isTouching(box2)){
    ball.bounceOff(box2);
    box2.destroy();
    score = score +3;
  }
  if (ball.isTouching(box3)){
    ball.bounceOff(box3);
    box3.destroy();
    score = score +3;
  }
  if (ball.isTouching(box4)){
    ball.bounceOff(box4);
    box4.destroy();
    score = score +3;
  }
  if (ball.isTouching(box5)){
    ball.bounceOff(box5);
    box5.destroy();
    score = score +3;
  }
  if (ball.isTouching(box6)){
    ball.bounceOff(box6);
    box6.destroy();
    score = score +3;
  }
  if (ball.isTouching(box7)){
    ball.bounceOff(box7);
    box7.destroy();
    score = score +3;
  }
  if (ball.isTouching(box8)){
    ball.bounceOff(box8);
    box8.destroy();
    score = score +3;
  }
  if (ball.isTouching(box9)){
    ball.bounceOff(box9);
    box9.destroy();
    score = score +2;
  }
  if (ball.isTouching(box10)){
    ball.bounceOff(box10);
    box10.destroy();
    score = score +2;
  }
  if (ball.isTouching(box11)){
    ball.bounceOff(box11);
    box11.destroy();
    score = score +2;
  }
  if (ball.isTouching(box12)){
    ball.bounceOff(box12);
    box12.destroy();
    score = score +2;
  }
  if (ball.isTouching(box13)){
    ball.bounceOff(box13);
    box13.destroy();
    score = score +2;
  }
  if (ball.isTouching(box14)){
    ball.bounceOff(box14);
    box14.destroy();
    score = score +2;
  }
  if (ball.isTouching(box15)){
    ball.bounceOff(box15);
    box15.destroy();
    score = score +2;
  }
  if (ball.isTouching(box16)){
    ball.bounceOff(box16);
    box16.destroy();
    score = score +2;
  }
}
//
function Cajas(){
  if (ball.isTouching(box1)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box2)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box3)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box4)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box5)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box6)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box7)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box8)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box9)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box10)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box11)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box12)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box13)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box14)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box15)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
  if (ball.isTouching(box16)){
    playSound("assets/category_explosion/destruction_5.mp3",false);
  }
}

 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
