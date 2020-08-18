//button actions
const f = document.getElementById("feed");
const r = document.getElementById("rest");
const p = document.getElementById("play");

const health = document.getElementById("health");
const hunger = document.getElementById("hunger");
const happiness = document.getElementById("happiness")

const reset = document.getElementById("reset")

class Chicken{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.happiness = 100;
    }

    // feed/hunger drain
    feed(){
        if (egbert.hunger <= 100) {
            egbert.hunger+= 20;
            hunger.src = `/assets/Icons/hungerbar/hungerbar${egbert.hunger}.png`;
            console.log(`fed: hunger ${egbert.hunger}`);
        }
        else {}
    }

    hungerDrain()
    {
        var hungerValue = setInterval(function(){
            egbert.hunger-= 10;
            console.log(`feed-drain: hunger ${egbert.hunger}`);
            hunger.src = `/assets/Icons/hungerbar/hungerbar${egbert.hunger}.png`;

            if(egbert.hunger === 0){
                clearInterval(hungerValue)
                console.log("cleared: hunger")
                egbert.petDeath();
            }  
        }, 3000);
    }

    // rest/health drain
    rest(){
        if (egbert.health <= 100) {
            egbert.health+= 10;
            health.src = `/assets/Icons/healthbar/healthbar${egbert.health}.png`;
            console.log(`rested: health ${egbert.health}`);
        }
        else {}
    }

    healthDrain()
    {
        var healthValue = setInterval(function(){
            if(egbert.hunger <= 50){
               egbert.health-= 10; 
               console.log(`rest-drain: health ${egbert.health}`);
               health.src = `/assets/Icons/healthbar/healthbar${egbert.health}.png`;
            }

            if(egbert.health === 0){
                clearInterval(healthValue)
                console.log("cleared: health")
                egbert.petDeath();
            }
            else{}
        }, 1500);
    }

    // play/happiness drain
    play(){
        if (egbert.happiness <= 100) {
            egbert.happiness+= 10;
            happiness.src = `/assets/Icons/happinessbar/happinessbar${egbert.happiness}.png`;
            console.log(`played: happiness ${egbert.happiness}`);
        }
        else {}
    }

    happinessDrain()
    {
        var happinessValue = setInterval(function(){
            if(egbert.happiness <= 100){
               egbert.happiness-= 10; 
               console.log(`happ-drain: happiness ${egbert.happiness}`);
               happiness.src = `/assets/Icons/happinessbar/happinessbar${egbert.happiness}.png`;
            }

            if(egbert.happiness === 0){
                clearInterval(happinessValue)
                console.log("cleared: happiness")
                egbert.petDeath();
            }
            else{}
        }, 4500);
    }


    petDeath()
    {
        if(egbert.happiness == 0 || egbert.health == 0 || egbert.hunger == 0){

            console.log("show reset window")
        }
        else{}
        
    }

}

// onload actions
const egbert = new Chicken("Egbert");

egbert.hungerDrain();
egbert.healthDrain();
egbert.happinessDrain();

// user-action buttons
f.onclick = egbert.feed;
r.onclick = egbert.rest;
p.onclick = egbert.play;