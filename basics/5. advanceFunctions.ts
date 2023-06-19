function addTwoWithType(num: number) {
  return "Hello";
}

addTwoWithType(5);

/* --------------------------------------------- */

//Here I expected a number from the function and I'm getting a string. So we have to specify that also.
function addTwoWithType_Return(num: number): number {
  return num + 6;
}

addTwoWithType_Return(5);

/* --------------------------------------------- */

//How to write map function. In this function we're expecting the return as a string
const heros = ["Thor", "Ironman", "Spiderman"];
heros.map((hero): string => {
  return `Hero is ${hero}`;
});

/* --------------------------------------------- */

type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = function (c, d) {
  return c * d;
};

/* --------------------------------------------- */

const addAllAdvancedFn = (a: number, b: number, c?: number): number => {
  if (typeof c === "undefined") {
    return a + b;
  }
  return a + b + c;
};

/* --------------------------------------------- */

//If you're not returning anything, then give the return type as void
const consoleError = (Errormsg: string): void => {
  console.log(Errormsg);
};
/* --------------------------------------------- */

//If you're not returning anything and throw an error, then give the return type as never
const thorwError = (Errormsg: string): never => {
  throw new Error(Errormsg);
};
