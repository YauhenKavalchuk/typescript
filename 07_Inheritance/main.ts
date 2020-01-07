// Sixple Class example
class User {
    
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

const yauhen = new User('Yauhen', 31);

yauhen;  // { name: 'Yauhen', age: 31 }

// Class static property
class User {
    
    name: string;
    age: number;
    static secret = 12345; 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

// Call static property
User.secret

// Call static property in class method
class User {
 
    name: string;
    age: number;
    static secret = 12345; 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

const yauhen = new User('Yauhen', 30);

yauhen.getPass(); // "Yauhen12345"

// Compiled
"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return this.name + User.secret;
    }
}
User.secret = 12345;

// Class example
class User {
 
    private nickName: string = 'webDev';
    static secret = 12345; 

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

// Inheritance
class Yauhen extends User {

    name: string = 'Yauhen';

}

const max = new User('Max', 20);
const yauhen = new Yauhen(31); // Expected 2 arguments, but got 1

// Realization of constructor in inherited class
class Yauhen extends User {

    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }

}

const max = new User('Max', 20);
const yauhen = new Yauhen(31);

// Personal method in inherited class
class Yauhen extends User {

    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User.secret}`;
    }

}

const yauhen = new Yauhen(31);

yauhen.getPass(); // "31Yauhen12345"

// Abstract Class
abstract class User {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;

}

const max = new User('Max', 20); // Cannot create an instance of an abstract class

// Create class using Abstraction
class Yauhen extends User { // Non-abstract class 'Yauhen' does not implement inherited abstract member 'getPass' from class 'User'

    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }

}

// Realization of 'getPass' method
class Yauhen extends User {

    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }

}

yauhen.greet();	// "Yauhen"
yauhen.getPass();	// "31Yauhen"
