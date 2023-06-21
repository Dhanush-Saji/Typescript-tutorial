// const superHeros = []
// superHeros.push('Superman') This won't work, because the array is considered as never

/* --------------------------------------------- */

// const superHeros:[] = []
// superHeros.push('Superman') This also won't work, because the array is considered as never

/* --------------------------------------------- */

const superHeros:string[] = [] //It can be number/string/boolean
superHeros.push('Hero')

/* --------------------------------------------- */

//Let me show you another way of doing the same thing
const superPower:Array<number> = []

/* --------------------------------------------- */

//Let me show you another way of doing the same thing
type UserArray={
    name:string,
    isActive:boolean,
}
const allUsers:UserArray[] = []
allUsers.push({name: 'Superman', isActive:true})

/* --------------------------------------------- */

//Array of arrays
const arrOfArr:number[][] = []
arrOfArr.push([4,5,7])

/* --------------------------------------------- */

//Array of objects
const arrOfObj: { name: string; isActive: boolean; }[] = [];
arrOfObj.push({ name: 'Superman', isActive: true });

/* --------------------------------------------- */

//Array of objects
//Here age is an optional parameter, Typescript willn't allow you to access the inner data of the optional parameter. 
// const arrOfObj1: { id: number, employee: boolean,name:string,age?:{value:number} }[] = [{id:12345,employee:false,name:'Dhanush',age:{value:12}}];
// arrOfObj1[0].age.value = 45

