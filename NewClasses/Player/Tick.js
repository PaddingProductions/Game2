Player.prototype.tick =  function () 
{
    //============= hitbox update ================
    this.hitbox.update();

    //===============input  & physics aplliacnce =================
    //knockback input block aplliance 
    if (!this.knockbackIgnore && !this.dashIgnore && !this.death) {  
        this.input();
        //if this if case is true, it means that it shouldn't have invicibility from recent hit.
        this.invincibility = false;


    } else if (this.death) {
        //=====if u died======
        //simply draw the animation and reset when ready
        GlobalStasis = true;
        GlobalDeath = true;

        this.deathDraw();
        this.deathFrame++;
        if (this.deathFrame == this.lifeEnd) //ToDo

        //skip, ur dead anyway
        return; 
    } else { 
        //can handle both knockback ignore and dash regardless of if activated.
        this.knockbackIgnore += this.knockbackIgnore > 0; 
        this.dashIgnore += this.dashIgnore > 0;

        //dash veloX constant, no falling when dash = true;
        if (this.dashIgnore > 0) {
            this.velox = this.dashSpeed*this.direct;
            this.veloy = 1;
        }


        if (this.dashIgnore == this.dashIgnoreTime)  {
            //deccelerate or he will be slowing down too slowly
            this.dashIgnore = 0;
            this.velox = 1/3 * this.dashSpeed * this.direct;
        }    
        if (this.knockbackIgnore == this.knockbackIgnoreTime)  this.knockbackIgnore = 0;
    }

    PositionUpdate(this);

    //killZone Life    ===============================================
    if (this.slashFrame != -1) 
    {
        this.killZone.life++;
        if (this.killZone.lifeTime == this.killZone.life) {
            this.killZone = 0;
        }
    }
    //animations =====================================================
    this.bounce += this.accend;
    if (this.bounce >= 6) this.accend = -1;
    if (this.bounce <= 0) this.accend = 1;

    this.slashFrame += (this.slashFrame != -1);
    if (this.slashFrame > 4) this.slashFrame = -1;
}