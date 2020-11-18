class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imgsmoke = loadImage("sprites/smoke.png")
    this.abc = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 5 && this.body.position.x > 200){

    var post = [this.body.position.x, this.body.position.y]
    this.abc.push(post)
    }

for (var i = 0; i < this.abc.length; i=i+1)
{
image (this.imgsmoke, this.abc[i][0], this.abc[i][1])
}


    
    
  }
}
