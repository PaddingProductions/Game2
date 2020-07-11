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
    constructor (x,y,w,h,damage, life, master) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.damage = damage;
        this.master = master;

        this.life = 0;
        this.lifeTime = life;
        this.type = 'killZone';
    }
}

class ClickBox {
    constructor (x,y,w,h, master) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.type = 'clickBox';
    }

    handleContact = function (entity) {
        this.trigger();
    }
}