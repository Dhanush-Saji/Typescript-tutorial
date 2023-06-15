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
type User={
    name:string,
    isActive:boolean,
}
const allUsers:User[] = []
allUsers.push({name: 'Superman', isActive:true})

/* --------------------------------------------- */

//Array of arrays
const arrOfArr:number[][] = []
arrOfArr.push([4,5,7],[1,2])
