/* String */
let greetings: string;
greetings = 'Hello';

/* Number */
let userID: number = 45
userID.toFixed(2)

/* Number */
let clientID = 45 //we can also write in this way. Typescript will detect the data type by itself.
clientID.toFixed(2)

/* Boolean */
let check:boolean = false;

/* Function */
let hero;
function getHero(){
    return 'Thor'
}
hero = getHero(); // If you hover over the hero you can see the data type is 'any', which is given by the typescript when the data type isn't predictable. But this isn't a good practise.
