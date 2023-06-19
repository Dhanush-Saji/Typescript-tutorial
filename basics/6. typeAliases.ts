type UserType = {
    name:string,
    email:string,
    isActive:boolean,
}

function createUser(user:UserType){ //Here we created a custom data type 'User' using 'type'

}
createUser({name:'',email:'',isActive:false})

/* --------------------------------------------- */

type varConfig = {
    readonly _id:string, //When you use the keyword 'readonly', you can't change the value once you assigned it
    name:string,
    email:string,
    isActive:boolean,
    creditCard?:number //When you give '?' after the key, which means that paramter is optional
}
let variable1:varConfig = {_id:'1234', name:'Dhanush', email:'', isActive:false}

variable1.name = 'Dhanush Saji'
// variable1._id = '256256' This won't work

/* --------------------------------------------- */

//In the below code we have 3 types and I'm combining first two of them to the third one
type cardName = {cardName:string}
type cardDate = {cardDate:string}

type cardDetails = cardName & cardDate & {cvv:number}

let test:cardDetails={cardName:'Hello',cardDate:'Hello',cvv:456}
