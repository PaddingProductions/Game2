Player.prototype.draw = function () {

    const x = 11*50;
    const y = 7*50;
    const bounceChange = (this.bounce > 3) * ((this.bounce-3) * 5);
    
    // body
    ctx.fillStyle = '#f0f';
    ctx.fillRect(x,y + bounceChange, this.hitbox.w * 50, this.hitbox.h *50 - bounceChange);

    // eyes
    ctx.fillStyle = '#000';
    ctx.lineWidth = 1;
    drawArc(x + 20 + this.direct*10,y+15 +bounceChange, 5);
    ctx.fill();
    drawArc(x + 30 + this.direct*10,y+15 +bounceChange, 5);
    ctx.fill();


    // targeting arrow 
    ctx.fillStyle = "#f00";
    ctx.lineWidth =  5;
    ctx.save();
    ctx.translate(x+25,y+25);
    ctx.rotate(mouse.angle);

    ctx.arc(0,0, 75, 1*Math.PI, 0);
    drawTri(0,-85, -5,-73, 5, -73);
    ctx.fill();

    ctx.restore();

    if (this.slashFrame != -1) this.slashDraw();
}


Player.prototype.slashDraw = function () {
    ctx.fillStyle = '#992b3f';
    ctx.save();
    
    ctx.translate(this.killZone.x +25, this.killZone.y +25);
    ctx.rotate(this.killZone.angle);    
    
    // this is the code that draws a slash animation to the right at 0,0 as upperleft corner.
    // -25 on all X axis to center it for easier and better rotation and translations. 
    // pretty confidant on this, if u think it's wrong, don't.

    switch(this.slashFrame) {
        case 1:
            drawTri(30 -25,  10, 20 -25, 0, 10 -25,  5); break;
        case 2:
            drawTri(25 -25,  10, 35 -25, 20, 30 -25, 40); break;
        case 3: 
            drawTri(50 -25, 35, 45 -25, 25, 42 -25, 38);
            drawTri(30 -25, 50, 40 -25, 35, 32 -25, 20); break;
        case 4:
            drawTri(25 -25, 35, 15 -25, 50,  5 -25, 48); break;
    }
    ctx.restore();
}