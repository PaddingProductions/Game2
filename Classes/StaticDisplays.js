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