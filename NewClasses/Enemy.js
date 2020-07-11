class Enemy extends EnemyTemplate { 
    constructor(x,y,hp, index) {
        super(x,y,hp,index);
        //frames
        this.bounce = 0;
        this.accend = 1;
    }
}

Enemy.prototype.AI = function () {
    this.velox = this.direct * 5;
    this.x += this.velox;

    // if bump into wall
    if (StaticObjectCollision(this.x, this.y, this.width, this.height)) {
        this.direct = ((this.direct < 0) * 2) -1;
        this.x -= this.velox;
        this.velox = this.direct * 5;
        this.x += this.velox;
    }
}

Enemy.prototype.draw = function () {
    
    if (player.x - 11*50 < this.x  && player.x +11*50 > this.x  &&
      player.y -7*50 < this.y  && player.y +7*50 > this.y) {

        if (this.death) {
            //draw some explosion here.
            return;
        }
        ctx.fillStyle = '#f00';
        const bounceChange = (this.bounce > 3) * ((this.bounce-3) *5);

        ctx.fillRect(this.x - (player.x -11*50), this.y - (player.y -7*50) +bounceChange,  50,50 -bounceChange);
    }
}