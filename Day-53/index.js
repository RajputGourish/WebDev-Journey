/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let Adjectives = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let shop = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let Another = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}

function businessnamegenerator() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let k = 1; k <= 3; k++) {
                console.log(Adjectives[i] + " " + shop[j] + " " + Another[k]);
            }
        }
    }
}

// businessnamegenerator();


function businessnamegenerator2() {

    let random1 = Math.floor(Math.random() * 10 % 3 + 1);
    let random2 = Math.floor(Math.random() * 10 % 3 + 1);
    let random3 = Math.floor(Math.random() * 10 % 3 + 1);

    console.log(random1, random2, random3);
    console.log(Adjectives[random1] + " " + shop[random2] + " " + Another[random3]);
}

// businessnamegenerator2();