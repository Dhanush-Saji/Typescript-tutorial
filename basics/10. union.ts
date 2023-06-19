//There are some cases we might not sure about the data types or there is  chance of different data types
let clientCode:number | string = 'hello';
clientCode = 55; 

/* --------------------------------------------- */

type UserUnion = {
    name: string,
    id:number
}
type Admin = {
    username: string,
    id:number,
    isAuth: boolean
}

let userUnion:UserUnion | Admin = {name: 'John', id:451}
userUnion = {name: 'Dhanush', id:89,isAuth: true}

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

/* --------------------------------------------- */

let data:number[] | string[] = [1,2,3]
// let data1:number[] | string[] = [1,2,3,"df"] This won't work because 'number[] | string[]' means either the whole array should be number or string
let data2:(number | string)[] = [1,2,3,"df"] 

/* --------------------------------------------- */

let seats:'front'|'back'|'window';
//you can only insert any of these data to the variable 'seats'