class BindedPopUps {
    constructor(x,y, bindedKey) {
        this.x = x;
        this.y = y;
        this.bindedKey = bindedKey;
        this.trigger = false;
        this.frame = 0;
    }
    tick = function () {
        if (commandKey[this.bindedKey])  {
            this.trigger = !this.trigger;
            GlobalPause = !GlobalPause
        }
        if (GlobalPause) this.draw();

        this.frame = (this.frame+1) % 50;

    }
}