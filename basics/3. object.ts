const exampleObj:{prop1:string,prop2:boolean} = {prop1:'Dave',prop2:true}
exampleObj.prop1 = 'true'

/* --------------------------------------------- */

//This means the function is returning an object.
function createCourse():{}{
    return {}
}

/* --------------------------------------------- */

function createUserObject({ name, isAuth }: { name: string, isAuth: boolean }){

}
createUserObject({name:'Dhanush',isAuth:false})

/* --------------------------------------------- */

function createUserReturn():{name:string,isAuth:boolean}{
    return{name:'Dhanush',isAuth:false}
}

/* --------------------------------------------- */

//There is one problem with the Typescript, Here I didn't defined the email, but still Typescript allow me to pass that in the function call. That's a problem from the Typescript side.
function createUserNew({ name, isAuth }: { name: string, isAuth: boolean }){
    console.log(name, isAuth);
    }
    let user = {name:'Dhanush',isAuth:false,email:'dhanush@gmail.com'}
    createUserNew(user)