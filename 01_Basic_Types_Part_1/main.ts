// Data types in JavaScript
- number
- string
- boolean
- null
- undefined
- object
- Symbol

// Type changing
var num = 42;
num = 'string';
num = '42';

// Defining types using operator typeof
typeof 42;          // "number"
typeof 'str';       // "string"
typeof true;        // "boolean"
typeof [];          // "object"
typeof {};          // "object"
typeof null;        // "object"
typeof undefined;   // "undefined"
typeof Symbol();    // "symbol"

// let & const difference
const num = 42;
num = 'string';  // Uncaught TypeError: Assignment to constant variable

let num = 42;
num = 'string';

// Boolean Type
let isCompleted: boolean = false;

isCompleted = 42;     // Type '42' is not assignable to type 'boolean'
isCompleted = '42';   // Type ’"42"' is not assignable to type 'boolean'

isCompleted = true;

// Number Type
let decimal: number = 6;
let integer: number = 7.10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String Type
let name: string = 'Yauhen';

let sentence: string = `Hello, my name is ${ name }`;

// Null & Undefined Types
// Javascript:
typeof null;	// "object"
typeof undefined;	// "undefined"

// TypeScript:
let u: undefined = undefined;
let n: null = null;

// Void Type
// Correct:
const greetUser = (): void => {
    alert("Hello, nice to see you!");
};

// Error: Type '() => void' is not assignable to type 'void'
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};
