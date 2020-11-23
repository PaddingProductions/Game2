
const StaticObjectCollision = (Initx,Inity,w,h) => {

    let floorx = Math.floor(Initx/50);
    let floory = Math.floor(Inity/50);

    let ceilx = Math.ceil(Initx/50);
    let ceily = Math.ceil(Inity/50);

    for (let y=0; y<h; y++) {
        for (let x =0; x<w; x++) {
            
            // assuming 0 is the only passable block
            if (map[floory +y][floorx +x]) return true;
            if (map[ceily +y][floorx +x]) return true;
            if (map[floory +y][ceilx +x]) return true;
            if (map[ceily +y][ceilx +x]) return true;
        }
    }
    return false;
}

const PositionUpdate = function(O, ignore) { 

    if (ignore === undefined) ignore = [];

    //     ----------slow down---------
    let accept = !StaticObjectCollision(O.x + O.velox - (O.velox > 0) - (O.velox < 0), O.y,
                                         O.hitbox.w,  O.hitbox.h);

    if (accept) {
        O.x += O.velox;
        O.velox -= (O.velox > 0) - (O.velox < 0);

    } else {
        const negative = (O.velox > 0) - (O.velox< 0);

        if (negative == 1)        O.x = Math.floor((O.x + O.velox) / 50) *50;
        else if (negative == -1)  O.x = Math.ceil ((O.x + O.velox) / 50) *50;

        O.velox = 0;
    }


    //      ------------ fall ------------
    let isIgnored = false;
    for (let i=0; i<ignore.length;i++) 
        if (ignore[i] == "fall") 
            isIgnored = true;

    accept = !StaticObjectCollision(O.x, O.y + O.veloy+1, O.hitbox.w, O.hitbox.h);

    if (!isIgnored) {
        if (accept) {
            O.veloy ++;
            O.y += O.veloy;
        }
        else {
            const negative = (O.veloy > 0) - (O.veloy< 0);

            if (negative == 1)       O.y = Math.floor((O.y + O.veloy) / 50) *50;
            else if (negative == -1) O.y = Math.ceil ((O.y + O.veloy) / 50) *50;

            O.veloy = 0;
        }
    }
}

const TemporaryEntityCollision = function (entity1, entity2) {
    const disX = Math.abs(entity1.x - entity2.x);
    const disY = Math.abs(entity1.y - entity2.y);

    if (disX > Math.min(entity1.w*50, entity2.w*50)) return false;
    if (disY > Math.min(entity1.h*50, entity2.h*50)) return false;

    return true;
    
}

const TrigCalculation = function (angle) {

    let changeX = - Math.sin(angle) * 50;
    let changeY = Math.cos(angle) * 50;

    return [changeX, changeY];
}