class Pawn {
    constructor (x,y) {
        this.x = x*50;
        this.y = y*50;
        // positive = right
        this.velox = 0;
        // positive = down
        this.veloy = 0;

        // negative = left positive = right
        this.direct = 1;
        //frames
        this.bounce = 0;
        this.accend = 1;
    }



    contact = function (entity) {
        switch (entity.type) {
            case 'killZone':
                let direct; 

                if (entity.x == this.x) direct = this.direct;
                else direct = (entity.x > this.x)*2 -1; 

                this.velox = direct * this.knockback;
                this.veloy = -this.knockback;

                this.knockbackDelay = 1;

                this.HP-1; 

                break;  
        }

        PositionUpdate(this);
    }
}

class EnemyTemplate {
    constructor(x,y,hp, index) {
        this.index = index
        this.x = x*50;
        this.y = y*50;

        this.height = 1;
        this.width = 1;

        this.hp = hp;

        this.velox = 0;
        this.veloy = 0;
        this.direct = -1;

        this.hitbox = new Hitbox(this.x, this.y, this.width, this.height, this);
        this.death = false;
        this.deathTime = 0;
        this.deathEnd = 5;
        this.killZone = new KillZone(x,y,1,1,1,-1,this);
    }

    tick = function () {

        if (this.death) {
            this.deathTime ++;
            if (this.deathTime >= this.deathEnd) 
                enemy.splice(this.index, 1);

            return;
        }   

        //killzone update
        this.killZone.x = this.x;
        this.killZone.y = this.y;
        
        this.AI();
        PositionUpdate(this);
        this.hitbox.update();

        //animations =====================================================
        this.bounce += this.accend;
        if (this.bounce >= 6) this.accend = -1;
        if (this.bounce <= 0) this.accend = 1;
    }

    contact = function (entity) {
        switch (entity.type) {
            case 'killZone':
                this.hp -= entity.damage;
                if (this.hp <= 0)  this.death = true;
                break;  
                
        }
    }

}

