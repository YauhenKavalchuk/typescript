// Function example
const createPassword = (name, age) => `${name}${age}`;

createPassword('Jack', 31);	// "Jack31"

// Arguments type
const createPassword = (name: string, age: number) => `${name}${age}`;

// Multiple argument types
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword('Jack', 31);		// 'Jack31'
createPassword('Jack', '31');	// 'Jack31'

// Default Arguments
const createPassword = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;

createPassword();		// "Max20"
createPassword(null);	// Argument of type 'null' is not assignable to parameter of type 'string | undefined'

// Optional Argument
// Error
const createPassword = (name: string, age: number): string => `${name}${age}`;

createPassword('Jack');	// 'An argument for 'age' was not provided.'

// Solution
const createPassword = (name: string, age?: number) => `${name}${age}`;

// REST
const createSkills = (name, ...skills) => `${name}, my skils are ${skills.join( )}`;

// REST type
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;

createSkills('Jack', 'JS', 'ES6', 'React');	// "Jack, my skils are JS,ES6,React"

// Returned type
const createPassword = (name: string = 'Max', age: number | string = 20): string => `${name}${age}`;

// Void
const greetUser: void = () => {
    alert("Hello, nice to see you!");
};

// Never
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

const infiniteLoop = (): never => {
    while (true) {}
};

// Function variable type
let myFunc;

function oldFunc(name: string):void {
    alert(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;

// Function type description
let myFunc: (firstArg: string) => void;

// Check
let myFunc: (firstArg: string) => number; // Type 'void' is not assignable to type 'number'
