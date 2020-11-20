function setup() {
  createCanvas(800, 400);
  stroke(0);
  fill(229, 198, 255);
  s = new Snake();
  s.foodCrd();
  
}


function draw() {
  background(171, 131, 209 ); //color del fondo
  stroke(0); //color de rectangulo de juego
  fill(229, 198, 255); //relleno lila
  rect(0,0,500,500); //rectangulo de area de juego
  
  strokeWeight(4);
  stroke(57, 18, 93  ); //grosor de letra y color
  fill(255, 255, 255  ); //color de las letras
  
  //titulo
  textSize(30);
  text("PINKU SNAKEU", 540, 40);
  
  //instrucciones
  textSize(16);
  text("* Haga click en la pantalla para iniciar!", 510, 60);
  text("* Utilice las flechas para jugar!", 510, 80);
  
  //puntaje
  text("Puntaje;", 510, 100);
  text((s.length)*4, 580,100);
  s.draw();
  s.dead();
  s.check();
  s.move();
  s.food();
  
  //Velocidad de la serpiente
  frameRate(9);
  
  
}

function Snake(){
 this.x = 100;
  this.y = 100;
  this.tailx = [];
  this.taily = [];
  this.length = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.move = function(){
    
    for(i = this.length-1; i > 0; i--)
    {
       this.tailx[i] = this.tailx[i-1];  
       this.taily[i] = this.taily[i-1];   
    }
    this.tailx[0] = this.x;
    this.taily[0] = this.y;
    
      this.x += this.xspeed*10;
      this.y += this.yspeed*10;
      if(this.x > 390)
        this.x = 0;
      else if(this.x < 0)
        this.x = 390;
      if(this.y < 0)
        this.y = 390;
      else if(this.y > 390)
        this.y = 0;
    
  }
  
  //cabeza y cola de la serpiente
  this.draw = function(){
    noStroke();
    fill(255, 134, 169);
    ellipse(this.x,this.y,20,20);
    
    
    for(i=0; i < this.length; i++)
      ellipse(this.tailx[i], this.taily[i], 15, 18);
    
    
  }
  
  this.change = function(x,y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  //comidita
  this.food = function(){
    noStroke();
    fill(255, 253, 128 );
    ellipse(this.r,this.p,12,12);
    fill(255, 253, 128 );
  }
  
  this.foodCrd = function(){
    this.r = int(random(0,400)/10)*10;
    this.p = int(random(0,400)/10)*10; 
    
  }
  
  this.check = function(){
     if(this.x == this.r && this.y == this.p)
     {
       this.foodCrd(); 
       this.length+=1;
     }
       
  }
  
  this.dead = function(){
     for(i=0; i<this.length; i++)
       if(this.x == this.tailx[i] && this.y == this.taily[i])
       {
          this.length = 0;
           this.tailx = [];
         this.taily = [];
           
       }
  }
}

//flechas
function keyPressed(){
   
    if(keyCode === UP_ARROW)
      s.change(0,-1);
    else if(keyCode === DOWN_ARROW)
      s.change(0,1);
    else if(keyCode === LEFT_ARROW)
      s.change(-1,0);
    else if(keyCode === RIGHT_ARROW)
      s.change(1,0); 
  }
