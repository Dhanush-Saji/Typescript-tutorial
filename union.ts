//There are some cases we might not sure about the data types or there is  chance of different data types
let clientCode:number | string = 'hello';
clientCode = 55; 

/* --------------------------------------------- */

type User = {
    name: string,
    id:number
}
type Admin = {
    username: string,
    id:number,
    isAuth: boolean
}

let user:User | Admin = {name: 'John', id:451}
user = {name: 'Dhanush', id:89,isAuth: true}

/* --------------------------------------------- */

// function getDbId(id:number | string){
//     id.toLowerCase() //This won't work. You can't perform such operation if type is like this
// }
// getDbId(5)
// getDbId('565')

//Instead you have to modify the code
function getDbId(id:number | string){
    if(typeof id === 'string'){
        id.toLowerCase() 
    }
}
getDbId(5)
getDbId('565')