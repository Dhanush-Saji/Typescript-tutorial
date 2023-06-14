//Here I'm passing a string to the function and adding the string with a number. This shouldn't be work, but it will. This is why we need to specify the type of the parameter of the function
function addTwo(num){
    return num + 2;
}

addTwo('4')

/* --------------------------------------------- */

function addTwoWithType(num:number){
    return num + 2;
}

addTwoWithType(5)

/* --------------------------------------------- */

//Multiple parameters in a function
function signup(name:string, password:string,isAuth:boolean){

}
signup('Dhanush','password',true)

/* --------------------------------------------- */

//Giving default value for the functions
const login = (name:string,pass:string,isAuth:boolean = true)=>{

}
login('Dhanush','password')