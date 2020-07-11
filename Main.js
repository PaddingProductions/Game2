const canvas = document.getElementById("main canvas");
const ctx = canvas.getContext("2d");

const MainLoop = () => {
    
    if (!GlobalPause) {
        //the many, many objects:
        player.tick();
        for (let i=0; i<enemy.length; i++) enemy[i].tick();


        // check entity collison
        // player sword -> enemy
        if (player.killZone != 0 && player.killZone != undefined) 
            for (let i=0; i<enemy.length; i++) 
                if (TemporaryEntityCollision(enemy[i].hitbox, player.killZone)) 
                    enemy[i].hitbox.handleContact(player.killZone);
    }
    //enemy -> player
    for (let i=0; i<enemy.length; i++) 
        if (TemporaryEntityCollision(enemy[i].killZone, player.hitbox))
            player.hitbox.handleContact(enemy[i].killZone);



    //recover
    ctx.fillStyle = '#eee';
    ctx.fillRect(0,0,1100,700);


    backGroundPrint(player.x,player.y);
    MapPrint(player.x,player.y);



    for (let i=0; i<enemy.length; i++) enemy[i].draw();
    player.draw();

    healthDisplay.draw();

    PauseScreen.tick();
    
    commandKey = {};
    mouse = {};
}

setInterval(MainLoop, 33);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
document.addEventListener("mouseup", mouseUp);