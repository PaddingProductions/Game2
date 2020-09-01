const keyDown = (e) => {
    moveKey[e.keyCode] = true;
}

const keyUp = (e) => {
    moveKey[e.keyCode] = false;
    commandKey[e.keyCode] = true;
}

const onMouseClick = function (e) {
    
    // if (entity.exist()) if (mouseClick(e, entity)) entity.trigger();  
    //copy and paste the code above to add new button listener, fill in the entity with the name of button.

    if (titleButton.exist()) if (mouseClick(e, titleButton)) titleButton.trigger();  
    if (startButton.exist()) if (mouseClick(e, startButton)) startButton.trigger();  
}

const mouseClick = function (e, entity) {

    if (entity.x < e.offsetX && entity.x +entity.w > e.offsetX) {
        if (entity.y < e.offsetY && entity.y + entity.h > e.offsetY) {
            return true;
        }
    }
    return false;
}