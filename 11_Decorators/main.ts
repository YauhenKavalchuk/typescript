// Simple class example
class User {

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Base structure of Decorator :)
const logClass = () => ();

// Class Decorator
const logClass = (constructor: Function) => {
    console.log(constructor);	// class User {}
};

@logClass
class User {

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);	// "secret"
};

class User {

    @logProperty
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Method Decorator
const logMethod = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log(propertyKey);   // "getPass"
};

class User {

    constructor(public name: string, public age: number) {}
    
    @logMethod
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// get/set Decorator
const logSet = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log(propertyKey);	// "myAge"
};

class User {

    constructor(public name: string, public age: number) {}
    
    @logSet
    set myAge(age: number) {
        this.age = age;
    }

}

// Factory Decorator
function factory(value: any) {        // Factory
    return function (target: any) {   // Decorator
        console.log(target);          // Decorator logic
    }
}

// Applying Factory Decorator
const enumerable = (value: boolean) => {
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = value;
    };
}

class User {

    constructor(public name: string, public age: number) {}

    @enumerable(false)
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Decorator Composition
// Apply decorators (one line)
@f @g x

// Apply decorators (multiple lines)
@f
@g
x

// Example of two factory decorators
const first = () => {
    console.log('first() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('first() called');
    };
}

const second = () => {
    console.log('second() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('second() called');
    };
}

// Apply and call two factory decorators
class User {

    constructor(public name: string, public age: number) {}
    
    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Call results:
"first() completing"      // Factory 1
"second() completing"     // Factory 2
"second() called"         // Decorator 2
"first() called"          // Decorator 1
