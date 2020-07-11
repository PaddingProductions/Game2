class HealthDisplay extends VarStaticDisplay {
    constructor(x,y,master) {
        super (x,y,master);
    }
}
HealthDisplay.prototype.draw = function() {
    ctx.save();

    ctx.translate(this.x,this.y);
    
    for (let i=0; i<this.master.MaxHP; i++) {
        ctx.translate(50,0);

        if (i < this.master.HP)          ctx.fillStyle="#9010a3";
        else     ctx.fillStyle = "#4a4a4a";



        const bounceChange = (this.master.bounce > 3) * ((this.master.bounce-3) *5);
        ctx.translate(25,25);

        ctx.beginPath();
        ctx.moveTo(-15  ,-13 +bounceChange ); 
        ctx.lineTo(-17  ,-2  +bounceChange ); 
        ctx.lineTo(-2   ,15  +bounceChange );
        ctx.lineTo(-5   ,20  +bounceChange );
        ctx.lineTo(21   ,0   +bounceChange );
        ctx.lineTo(20   ,-18 +bounceChange );
        ctx.lineTo(15   ,-22 +bounceChange );
        ctx.lineTo(0    ,-10 +bounceChange );
        ctx.lineTo(-5   ,-20 +bounceChange );
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.translate(-25,-25);
    }
    ctx.restore();

}