class PausePopup extends BindedPopUps {
    constructor (x,y,bindedKey) {
        super(x,y,bindedKey);
        
    }

    draw = function() {

        ctx.fillStyle = "#f00";
        ctx.fillRect(0, 150,1100,400);

        ctx.fillStyle = "#000";
        ctx.fillRect(0,160, 1100, 15);

        ctx.lineWidth = 15;
        for (let i=0; i<23; i++) {
            ctx.beginPath();
            ctx.moveTo(i*50 + 30 - this.frame, 170);
            ctx.lineTo(i*50 + 10 - this.frame, 215);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.fillRect(0,210, 1100, 15);
        


        ctx.fillStyle = "#000";
        ctx.fillRect(0,475, 1100, 15);

        ctx.lineWidth = 15;
        for (let i=0; i<23; i++) {
            ctx.beginPath();
            ctx.moveTo(i*50 + 30 - this.frame, 480);
            ctx.lineTo(i*50 + 10 - this.frame, 525);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.fillRect(0,520, 1100, 15);


        text(350,275, "paused", 10)
        
        ctx.fillStyle = "#000";
        ctx.beginPath(); ctx.moveTo(50,335); ctx.lineTo(40,345);  ctx.stroke(); ctx.closePath();
        text(60, 335, "title", 2);

        ctx.fillStyle = "#000";
        ctx.beginPath(); ctx.moveTo(1050,335); ctx.lineTo(1060,345);  ctx.stroke(); ctx.closePath();
        text(940, 335, "menu", 2);
        
        ctx.lineWidth = 1;

    }
}