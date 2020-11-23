let moveKey = {};
let commandKey = {};
let GlobalPause = false;
let GlobalTitle = true;
let GlobalStasis = true;
let GlobalDevMode = true;
const centerX = 550;
const centerY = 350;

let mouse = {
    x:0,
    y:0,
    angle: 0, // this is relative to center.
    button: -1,
    slope: 0, // this is relative to center.

    tick: function(e) {

        mouse.x = e.offsetX;
        mouse.y = e.offsetY;

        const diffx = mouse.x- (550 +25);
        const diffy = mouse.y- (350 +25);
        mouse.angle = Math.atan(   Math.abs((diffy)  /  (diffx))   );
        
        // becasue of the nature of tan, u can only get the degree 90 or less, thus, to increase it we must do some math
        if (diffy<0 && diffx<0) {
            mouse.angle += 3 *( 90*Math.PI /180);

        } else if (diffy>0 && diffx<0) {
            mouse.angle = 90*Math.PI/180 - mouse.angle;
            mouse.angle += 2 *( 90*Math.PI /180);
        } else if (diffy>=0 && diffx>=0) {
            mouse.angle += 1 *( 90*Math.PI /180);
        } else {
            mouse.angle = 90*Math.PI/180 - mouse.angle;
        }

        mouse.slope = (mouse.y - centerY)/(mouse.x - centerX); 
    }
}

function drawTargetPointer () {
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
}
const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
const backGround = [
    [1],
];

const TitleScreen = new TitleMenu();
const PauseScreen = new PausePopup(0,0,69);


let enemy = [
    new Enemy(20,12,1, 0),
    new Enemy(15,12,1, 1),
]
player = new Player(1,1);
healthDisplay = new HealthDisplay(0,0,player);