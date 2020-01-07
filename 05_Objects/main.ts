// Simple object example
let user = {
    name: 'Yauhen',
    age: 30,
};

// Object type using any
let user: any = {
    name: 'Yauhen',
    age: 30,
};

user = 'test';

// Array Type
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];

// Define Object type
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
};

// Try to change property
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 'test',    // The expected type comes from property 'age' which is declared here on type '{ name: string; age: number; }'
};

// Try to change variable type
user = 'test';  // Type '"test"' is not assignable to type '{ name: string; age: number; }'

// Additional property
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev', // Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number; }'
};

// Updating object type
let user: { name: string, age: number, nickName: string } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};

// Dynamicaly object changes
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
};

user.nickName = 'webDev';   // Property 'nickName' does not exist on type '{ name: string; age: number; }'

// Updating object type
let user: { name: string, age: number, nickName: string } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};

// New admin object
let admin: { name: string, age: number, nickName: string } = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
};

// 2 object with the same types
let user: { name: string, age: number, nickName: string } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};

let admin: { name: string, age: number, nickName: string } = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
};

// Using Type for objects structure
type Person = { name: string, age: number, nickName: string };

let user: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};


let admin: Person = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
};

// 2 object with almost the same structure
let user: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};

let admin: Person = {
    name: 'Max',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};

// Updating type with optional properties
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};
