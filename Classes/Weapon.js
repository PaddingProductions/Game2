class Weapon {
    constructor () {
        // identification, name is for system, profile is image for player
        this.name = "";
        this.profile = undefined;

        //properties for calcuations
        this.damage = 1;
        this.speed = 25;

        //for looped link list. ##### IF YOU DON'T KNOW WHAT THIS IS GO LOOK IT UP #####
        this.next = undefined;
    }

    shoot = function() {

        //ProjectileEntities.push(new Projectile(angle,this.speed,this.damage));
    }
}