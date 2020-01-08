// Data types in JavaScript
- number
- string
- boolean
- null
- undefined
- object
- Symbol    // ES6

// Variable type changing
var num = 42;		// number
num = 'hello';		// string
num = false;		// boolean

// Defining types using operator typeof
typeof 42;          // "number"
typeof 'str';       // "string"
typeof true;        // "boolean"
typeof [];          // "object"
typeof {};          // "object"
typeof null;        // "object"
typeof undefined;   // "undefined"
typeof Symbol();    // "symbol"

// const
const num = 42;
num = 'hello';	// Uncaught TypeError: Assignment to constant variable

// let
let num = 42;
num = 'hello';	// No errors

// Boolean Type
let isCompleted: boolean = false;

isCompleted = 42;     // Type '42' is not assignable to type 'boolean'
isCompleted = '42';   // Type ’"42"' is not assignable to type 'boolean'

isCompleted = true;

// Number Type
const decimal: number = 6;
const integer: number = 7.10;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String Type for simple string
const name: string = 'Yauhen';

// String Type for template string
const sentence: string = `Hello, my name is ${ name }!`;

// Null & Undefined Types
// JavaScript:
typeof null;		// "object"
typeof undefined;	// "undefined"

// TypeScript types:
const u: undefined = undefined;
const n: null = null;

// Void Type
// For function result:
const greetUser = (): void => {
    alert("Hello, nice to see you!");
};

// For 'greetUser'
// Error: Type '() => void' is not assignable to type 'void'
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};
