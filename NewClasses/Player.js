
class Player extends Pawn {
    
    constructor (x,y) {
        super(x,y);
        //with & height
        this.hitbox = new Hitbox(this.x, this.y, 1,1, this);

        this.MaxHP = 5;
        this.HP = 5;
        
        this.slashFrame = -1;
        // used for attacking Map below
        //    -2
        //  -1 + 1
        //     2
        this.swordDirect = 0;

        //ignores inputs when hit momentarily 
        this.knockbackIgnoreTime = 20;
        this.knockbackIgnore = 0;
        this.knockback = 15;

        //dash input ignore time + dash velocity X constant no decrease;
        this.dashIgnoreTime = 10;
        this.dashIgnore = 0;
        this.dashSpeed = 30;
    }
}


Player.prototype.input = function () {
    //direction of sword swing
    //jump
    if (moveKey[32]) {
        if (!this.veloy) this.veloy = -20;

    //left
    } 
    if (moveKey[65]) {
        this.velox = -10;
        this.direct = -1;
        this.swordDirect = -1;
    //right
    } 
    if (moveKey[68]) {
        this.velox = 10
        this.direct = 1;
        this.swordDirect = 1;
    } 
    //up
    if (moveKey[87]) {
        this.swordDirect = -2;
    }
    if (moveKey[83]) {
        this.swordDirect = 2;
    }
    //left click
    if (commandKey[77]) {
        this.slashFrame = 0;
        //if swung without directional input;

        this.killZone = new KillZone(this.x + 50*   (Math.abs(this.swordDirect) < 2)*this.swordDirect,  
                                       this.y + 50* (Math.abs(this.swordDirect) > 1)*this.swordDirect * 0.5, 
                                       50, 50, 1, 5, this); 

        console.log(this.x);
        console.log(this.y);
        console.log(this.killZone.x);
        console.log(this.killZone.y);
        
    }
    //shift
    if (commandKey[16]) {
        this.dashIgnore = 1;
    }
}


Player.prototype.draw = function () {
    const x = 11*50;
    const y = 7*50;
    const bounceChange = (this.bounce > 3) * ((this.bounce-3) * 5);

    ctx.fillStyle = '#f0f';
    ctx.fillRect(x,y + bounceChange, this.hitbox.w * 50, this.hitbox.h *50 - bounceChange);

    ctx.fillStyle = '#000';
    drawArc(x + 20 + this.direct*10,y+15 +bounceChange, 5);
    ctx.fill();
    drawArc(x + 30 + this.direct*10,y+15 +bounceChange, 5);
    ctx.fill();

    if (this.slashFrame != -1) this.slashDraw();
}


Player.prototype.slashDraw = function () {
    ctx.fillStyle = '#992b3f';
    ctx.save();
    
    //flip flop for right
    if (this.swordDirect == 1) {
        ctx.translate(12*50,7*50);
        ctx.scale(-1,1);

    } if (this.swordDirect == -1)  {
        ctx.translate(11*50,7*50);

    } if (this.swordDirect == 2) {
        ctx.translate(11*50, 8*50);
        ctx.rotate(270 * Math.PI/ 180)

    } if (this.swordDirect == -2) {
        ctx.translate(12*50, 7*50)
        ctx.rotate(90 * Math.PI/ 180)

    }
    


    switch(this.slashFrame) {
        case 1:
            drawTri(-30,  5, -20, -5, -10,  0); break;
        case 2:
            drawTri(-25,  5, -35, 15, -30, 35); break;
        case 3: 
            drawTri(-50, 30, -45, 20, -42, 33);
            drawTri(-30, 45, -40, 30, -32, 15); break;
        case 4:
            drawTri(-25, 30, -15, 45,  -5, 43); break;
    }
    ctx.restore();
}


Player.prototype.tick =  function () 
{
    console.log(this.swordDirect);
    // hitbox update =================================================
    this.hitbox.update();

    //input  & physics aplliacnce ====================================
    //knockback input block aplliance 
    if (!this.knockbackIgnore && !this.dashIgnore)  
        this.input();

    else { 
        this.knockbackIgnore += this.knockbackIgnore > 0; 
        this.dashIgnore += this.dashIgnore > 0;
        

        //dash veloX constant, no falling when dash = true;
        if (this.dashIgnore > 0) {
            this.velox = this.dashSpeed*this.direct;
            this.veloy = 1;
        }


        if (this.dashIgnore == this.dashIgnoreTime)  {
            //deccelerate or he will be slowing down too slowly
            this.dashIgnore = 0;
            this.velox = 1/3 * this.dashSpeed * this.direct;
        }    
        if (this.knockbackIgnore == this.knockbackIgnoreTime)  this.knockbackIgnore = 0;
    }

    PositionUpdate(this);

    //killZone Life    ===============================================
    if (this.slashFrame != -1) 
    {
        this.killZone.life++;
        if (this.killZone.lifeTime == this.killZone.life) {
            this.killZone = 0;
        }
    }
    //animations =====================================================
    this.bounce += this.accend;
    if (this.bounce >= 6) this.accend = -1;
    if (this.bounce <= 0) this.accend = 1;

    this.slashFrame += (this.slashFrame != -1);
    if (this.slashFrame > 4) this.slashFrame = -1;
}