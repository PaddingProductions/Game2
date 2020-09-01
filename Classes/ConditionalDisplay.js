class ConditionalDisplay  {
    constructor (x,y, exist, draw) {
        this.x = x;
        this.y = y;
        this.exist = exist;
        this.draw = draw;
    }
    tick = function() {
        this.draw();
    }
}
//this is how you use it, when tied to a click box to make a independent button.
//
//visualDisplay = new ConditionalDisplay(x,y,this.exist, function () {
//        
//});
