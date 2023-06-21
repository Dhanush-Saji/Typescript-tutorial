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
hero = getHero(); // If you hover over the hero you can see the data type is 'any', which is given by the typescript when the data type isn't predictable. But this isn't good practise.

/* When we don't know what the key is, we can use the type'Record'. It requires two arguments */
const dontKnowKey1:Record<string,boolean> = {
    loading: false,
    isAuth:true
}
const dontKnowKey2:Record<string,number[]> = {
    loading: [1,2,3],
    isAuth:[1,2,3]
}