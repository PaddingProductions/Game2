class StaticDisplay {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
}

class VarStaticDisplay extends StaticDisplay {
    constructor (x,y, master) {
        super(x,y);
        this.master = master;
    }
}

class TitleMenu {
    constructor () {
        this.x = 0;
        this.y = 0;
    }

    exist = function() {return GlobalTitle;}

    tick = function() {
        if (GlobalTitle) this.draw();
    }   
    
    draw = function () {
        ctx.fillStyle = '#eee';
        ctx.fillRect(0,0,1100, 700);

        text(250, 300,"hello there", 5);
        text(400, 350,"click start", 2);

        text(500, 400     ,"left click: attack", 1.5);
        text(500, 400 +20 ,"awsd:       movement", 1.5);
        text(500, 400 +40 ,"space:      jump", 1.5);
        text(500, 400 +60 ,"shift:      dash", 1.5);
        
    }
}