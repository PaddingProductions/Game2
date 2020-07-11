const keyDown = (e) => {
    moveKey[e.keyCode] = true;
}

const keyUp = (e) => {
    moveKey[e.keyCode] = false;
    commandKey[e.keyCode] = true;
}

const mouseUp = function (e) {
    mouse.button = e.button;
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
}
