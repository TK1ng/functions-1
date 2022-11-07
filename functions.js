let jonSnowHealth = 100;

//converting to string
// jonSnowHealth =  String(jonSnowHealth)
// jonSnowHealth = toString(jonSnowHealth)

//converting to a number
// jonSnowHealth = parseInt(jonSnowHealth)

//converting to a boolean
// jonSnowHealth = Boolean(jonSnowHealth)

//converting using string coercion/concatenation
// jonSnowHealth = jonSnowHealth + ' health'

// jonSnowHealth = 'health - ' + jonSnowHealth

//Find/replace
let theWinnerIs = 'Jamie is the Winner';

let newWinner = theWinnerIs.toLowerCase().replace('jamie', 'Jon');

if (newWinner.toLowerCase().includes('jon')) {
    console.log('replaced successfully')
} else {
    console.log('not replaced');
}

console.log(newWinner)

//convert to kebab-case
let kebabWinner = newWinner.replaceAll(' ', '-');

console.log(kebabWinner);

let transform = newWinner.split(' ').join('-');

console.log(transform)

//functions

//check if Jon is alive


function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log('Jon is alive!');
    } else {
        console.log('Jon is in the upper roooom');
    }
}

isJonAlive();

//attack Jon

function attack(level) {
    jonSnowHealth -= level;
}

attack(20);
attack(20);
console.log(jonSnowHealth);


//Function with multiple arguments

function greeting(person1, person2) {
    console.log(`${person1} and ${person2} are saying hello to each other!`);
}

greeting('Yoda', 'Luke');

//functions with return

function rollDice() {
    let possibleRoll = [1, 2, 3, 4, 5, 6];
    let randomIndex = Math.floor(Math.random() * possibleRoll.length);

    console.log(possibleRoll[randomIndex]);
}

rollDice();
rollDice();

