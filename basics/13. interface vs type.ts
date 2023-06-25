// In TypeScript, both type and interface are used to define custom types, but they have some differences in how they can be used.

// The interface keyword is primarily used for object types and is the recommended way of defining object shapes in TypeScript. It allows you to describe the structure of an object by specifying the names and types of its properties. Interfaces can also include optional properties, readonly properties, and methods signatures. Interfaces can be extended by other interfaces using the extends keyword.
interface Person {
  name: string;
  age: number;
  greet(): void;
}

/* --------------------------------------------- */

// The type keyword, on the other hand, is a more general way of creating custom types. It can be used to define not just object types but also union types, intersection types, and more. You can think of type as a way to create aliases for existing types or to create complex type compositions.

type Point = {
  x: number;
  y: number;
};

type Status = "pending" | "approved" | "rejected";

type Named = {
  name: string;
};

type Aged = {
  age: number;
};

type Student = Named & Aged;
