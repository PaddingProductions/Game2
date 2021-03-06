
class Player extends Pawn {
    
    constructor (x,y) {
        super(x,y);
        //with & height
        this.hitbox = new Hitbox(this.x, this.y, 1,1, this);

        this.MaxHP = 5;
        this.HP = 5;
                
        //ignores inputs when hit momentarily 
        this.ignoreTime = 0;
        this.ignoreCounter = -1;
        this.ignore = false;

        //ignores damaage for a while
        this.invincibility = false;
        
        //dash velocity X constant no decrease;
        this.dashSpeed = 30;

        //play death animation;
        this.death = false;
        this.deathFrame = 0;
        this.lifeEnd = 10;

        //player arsenal, a looped link list,  DON"T PHUCK UP
        //this.weapon = new Bow(); this.weapon.next = this.weapon;
    }
}
