//życie
var hp = 100;


// zadawanie dmg
/*function hit(dmg,bns) {

    hp-= (Math.ceil( Math.random() * dmg) + bns);
    
    //zmiana statusu grcza
    
    if (hp < 1) {
        hp = 0;
        document.getElementById("playerstatus").innerHTML = "You are dead!";
    } else if (hp < 31) {
        document.getElementById("playerstatus").innerHTML = "Your are close to death!";
    } else {
        document.getElementById("playerstatus").innerHTML = "You are OK!";
    }

    document.getElementById("lifemeter").innerHTML = "Life: " + hp;

}*/


function hit (dmg) {
    hp += dmg;

    if (hp > 100){
        hp = 100;
    } else if (hp < 0){
            hp = 0;
    }

    document.getElementById("lifemeter").innerHTML = hp;

}

function randomEvent () {
    var rndm = Math.ceil( Math.random() * 10 );
    var evnt = "none";

    switch (rndm) {
        case 1:
            evnt = "Chemtrails"; 
            break;
        case 2:
            evnt = "Złamana noga 1";
            break;
        case 3: 
            evnt = "Złamana noga 2";
            break; 

        case 4: 
            evnt = "Złamana ręka 1";
            break;

        case 5:
            evnt = "Złamana ręka 2";
            break;
        default:
            evnt = "none"; 

    }


    document.getElementById("randomeventcounter").innerHTML = evnt;

    alert (evnt);
}



// leczenie
function healpotion() {
    
    if (hp < 100) {
        hp += 10;
        document.getElementById("playerstatus").innerHTML = "You are heald";
    } else if (hp > 100) {
        hp = 100;
        document.getElementById("playerstatus").innerHTML = "You cant use it now!";
    } 


    document.getElementById("lifemeter").innerHTML = "Life: " + hp;
}