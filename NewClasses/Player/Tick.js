Player.prototype.tick =  function () 
{
    this.hitbox.update();


    //======= if ignore input ==========
    if (!this.inputIgnore) {  
        this.input();
        //if this if case is true, it means that it shouldn't have invicibility from recent hit.
        this.invincibility = false;


    }  else { 
        //can handle both knockback ignore and dash regardless of if activated.
        this.ignoreCounter += this.ignoreCounter > 0; 
        

        if (this.ignoreCounter == this.ignoreTime)  {
            this.ignore = 0;
        }    
        if (this.knockbackIgnore == this.knockbackIgnoreTime)  this.knockbackIgnore = 0;
    }

    //====guess what it does======
    PositionUpdate(this);

    //================ killZone Life   ====================
    if (this.killZone != undefined) {
        this.killZone.life++;
        if (this.killZone.lifeTime == this.killZone.life) {
            this.killZone = undefined;
        }
    }
    //================  animations ============
    this.bounce += this.accend;
    if (this.bounce >= 6) this.accend = -1;
    if (this.bounce <= 0) this.accend = 1;

}