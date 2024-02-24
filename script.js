let dir;
let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

let xpos = 300;
let ypos = 300;
let speed = 5;
let attack;
let attacks=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  //attack = new Attack(width/2+30,attack_height_pos);
}

function draw() {
    push();
    translate(200,0);
    image(map,0,0,windowWidth-400,windowHeight);
    pop();
  //background(220);

  // draw moving character
  fill(0, 0, 255);
  ellipse(xpos, ypos, 75, 75);

  // update moving character
  if (movingRight) {
    xpos += speed;
  }
  if (movingLeft) {
    xpos -= speed;
  }
  if (movingUp) {
    ypos -= speed;
  }
  if (movingDown) {
    ypos += speed;
  }

  // show boolean values onscreen for clarity
//   textSize(20);
//   text("movingRight = " + movingRight + 
//        "\nmovingLeft = " + movingLeft + 
//        "\nmovingUp = " + movingUp + 
//        "\nmovingDown = " + movingDown, 10, 10, width/2, height/2);

for (let i=0;i<attacks.length;i++){
  attacks[i].show();
  attacks[i].move();
  /*
  for (let j=0;j<enemies.length;j++){
      if (attacks[i].hits(enemies[j])){
          enemies[j].health-=1;
          if (enemies[j].health<1){
              enemies[j].health = Math.random() * (enemies[j].MAX_HEALTH - enemies[j].MIN_HEALTH) + enemies[j].MIN_HEALTH;
              
              enemies[j].x = (2*Math.random() -1)*bgImage.x;
              enemies[j].y = (2*Math.random() -1)*bgImage.y;
              plyr.score++;
              
          } 
          
          attacks[i].evaporate();
          
          //let blood = new Blood(enemies[j].x-bgImage.x,enemies[j].y-bgImage.y);
          //blood.init_image("assets/blood",8);
          //blood_particles.push(blood)
      }
    
  }
  */
}


}

function keyPressed() {
  if (key == 'w'|| keyCode===UP_ARROW) {
    movingUp = true;
  }
  if (key == 'a' ||  keyCode===LEFT_ARROW) {
    movingLeft = true;
  }
  if (key == 's'  || keyCode===DOWN_ARROW) {
    movingDown = true;
  }
  if (key == 'd' || keyCode===RIGHT_ARROW) {
    movingRight = true;
  }
}

function keyReleased() {
    if (key == 'w'|| keyCode===UP_ARROW) {
        movingUp = false;
      }
      if (key == 'a' ||  keyCode===LEFT_ARROW) {
        movingLeft = false;
      }
      if (key == 's'  || keyCode===DOWN_ARROW) {
        movingDown = false;
      }
      if (key == 'd' || keyCode===RIGHT_ARROW) {
        movingRight = false;
      }
}
function mousePressed(){
  console.log("mouse has preesss");
  attack = new Attack(xpos,ypos, mouseX, mouseY, true);
  attacks.push(attack);
}