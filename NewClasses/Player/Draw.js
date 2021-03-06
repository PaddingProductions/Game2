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


    //========Effects=====
    if (this.killZone != undefined) this.slashDraw();

}


Player.prototype.slashDraw = function () {

    ctx.save();
    
    ctx.fillRect(11*50 + this.killZone.x - this.x, 7*50 + this.killZone.y - this.y, this.killZone.w, this.killZone.h);
    ctx.rotate(this.killZone.angle);    
    
    ctx.fillStyle = "#80060c";
    ctx.fillRect(-25,-25,this.killZone.w,this.killZone.h);
    
    ctx.restore();
}