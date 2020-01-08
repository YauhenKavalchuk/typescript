// Simple interface example
interface User {
    name: string,
    age: number,
}

// Interface & Type
interface User {
    name: string,
    age: number,
}

type User {
    name: string,
    age: number,
}

// Create object based on Interface
interface User {
    name: string,
    age: number,
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
}

// Interface optional property
interface User {
    name: string,
    age?: number,	// <--- Optional
}

// Creation with a required property
const yauhen: User = {
    name: 'Yauhen',
}

// Creation with missing a required property
/*
  Error:
  Property 'name' is missing in type '{ age: number; }' but required in type 'User'
*/
const max: User = {
    age: 20,
}

// Interface 'readonly' modifier
interface User {
    readonly name: string,
    age: number,
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
}

yauhen.age = 30;
yauhen.name = 'Max'; // Cannot assign to 'name' because it is a read-only property

// Compare interface type and object
interface User {
    name: string,
    age: number,
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
  	/*
      Error:
      Object literal may only specify known properties, and 'nickName' does not exist in type 'User'
    */
    nickName: 'webDev',		// <--- Didn't described in interface "User"
}

// Interface extension
interface User {
    name: string,
    age: number,
    [propName: string]: any;
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
    nickName: 'webDev',
    justTest: 'test',
}

// Class Interface
interface User {
    name: string,
    age: number,
    getPass(): string,
}

class Yauhen implements User {
    name: string = 'Yauhen';
    age: number = 31;
    nickName: string = 'webDev';

    getPass() {
        return `${this.name}${this.age}`;
    }
}

// Create Class based on multiple interfaces
interface User {
    name: string,
    age: number,
}

// Separate interface with one method
interface Pass {
    getPass(): string,
} 

class Yauhen implements User, Pass {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}

// Interface extends
interface User {
    name: string,
    age: number,
}

// Interface extends
interface Admin extends User {
    getPass(): string,
}

class Yauhen implements Admin {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}
