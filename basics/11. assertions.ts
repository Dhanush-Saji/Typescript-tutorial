type One = string;
type Two = string | number;
type Three = 'hello'

/* --------------------------------------------- */

let a: One = 'hello';

//convert to less specific
let b = a as Two
//convert to more specific
let c = a as Three

/* --------------------------------------------- */

const addOrConcat = (a: number, b: number,c:'add'|'concat'): number | string =>{
    if(c === 'add') return a + b;
    return '' + a + b;
}
let myVal:string = addOrConcat(2,2,'add') as string

let nextVal:number = addOrConcat(2,2,'concat') as number //As we know we're passing 'concat', and we only string as return. But we said the TypeScript that it will return a number by 'as string' and TypeScript will blindly believe that. So use carefully this property.