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
    console.log(constructor);	// Result of call: class User {}
};

@logClass		// <--- Apply decorator for class
class User {

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Property Decorator
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);	// Result of call: "secret"
};

class User {

    @logProperty		// <--- Apply decorator for property
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Method Decorator
const logMethod = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);   // Result of call: "getPass"
};

class User {

    constructor(public name: string, public age: number) {}
    
    @logMethod			// <--- Apply decorator for method
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// get/set Decorator
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);	// Result of call: "myAge"
};

class User {

    constructor(public name: string, public age: number) {}
    
    @logSet		// <--- Apply decorator for set
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
    return (
      target: any,
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = value;
    };
}

class User {

    constructor(public name: string, public age: number) {}

    @enumerable(false)			// <--- Call decorator factory with argument
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Decorator composition syntax
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
