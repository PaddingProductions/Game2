class Hitbox {
    constructor (x,y,w,h, master) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.master = master;

        this.type = 'hitBox';
    }
    
    update = function () {
        this.x = this.master.x;
        this.y = this.master.y;
    }
    handleContact = function (entity) {
        this.master.contact(entity);
    }
}

class KillZone {
    constructor (x,y,w,h, angle, damage, life, master) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.damage = damage;
        this.master = master;

        this.life = 0;
        this.lifeTime = life;
        this.type = 'killZone';
    }

    // for debugging
    draw = () => {
        ctx.fillStyle = "#f00";

        ctx.fillRect(11*50 + this.x - this.master.x, 7*50 + this.master.y - this.y, this.w, this.h);

    }
}

class ClickBox {
    constructor (x,y,w,h, name) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.type = name;
    }
}
