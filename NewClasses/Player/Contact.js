Player.prototype.contact = function (entity) {
    switch (entity.type) {
        case 'killZone':

            //stagger time invincibility 
            if (this.knockbackIgnore) return;
            
            let direct; 

            if (entity.x == this.x) direct = this.direct;
            else direct = (entity.x > this.x)*2 -1; 

            this.velox = direct * this.knockback;
            this.veloy = -this.knockback;

            this.knockbackDelay = 1;

            this.HP-=1; 
            //temporary invincibility 
            this.invincibility = true;

            break;  
    }

    PositionUpdate(this);
}