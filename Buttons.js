class TitleButton extends ClickBox {
    constructor (x,y,w,h,name ) {
        super(x,y,w,h,name);
    }
    exist = function () {
        return GlobalPause;
    }
    trigger = function () {
        GlobalTitle = true;
        GlobalPause = false;
        GlobalStasis = true;
    }
}

const titleButton = new TitleButton(40,320,150,40, "TitleButton");


class StartButton extends ClickBox {
    constructor (x,y,w,h,name ) {
        super(x,y,w,h,name);
    }
    exist = function() {
        return GlobalTitle;
    }
    trigger = function() {
        GlobalTitle = false;
        GlobalPause = false;
        GlobalStasis = false;
    }
}
const startButton = new StartButton(400, 350,150,40, "StartButton");

class RestartButton extends ClickBox {
    constructor (x,y,w,h,name ) {
        super(x,y,w,h,name);

    }
    exist = function() {
        return GlobalDeath;
    }
    trigger = function() {
        GlobalDeath = false;
        GlobalTitle = true;
    }
    visualDisplay = new ConditionalDisplay(this.x,this.y,this.exist, function () {
        text(x,y,"return to title",2);
    });
}

const restartButton = new RestartButton(40,320,150,40, "RestartButton");

