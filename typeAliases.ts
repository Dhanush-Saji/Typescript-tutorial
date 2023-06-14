type User = {
    name:string,
    email:string,
    isActive:boolean,
}

function createUser(user:User){ //Here we created a custom data type 'User' using 'type'

}
createUser({name:'',email:'',isActive:false})