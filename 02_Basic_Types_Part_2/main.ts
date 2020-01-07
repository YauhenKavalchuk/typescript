// Array Type
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];

// Tuple Type
let x: [string, number];
x = ["hello", 10];

let y: [string, number] = ["goodbuy", 42];

x = [10, "hello"]; // Type 'string' is not assignable to type 'number'

// Any Type
let y: [any, any] = ["goodbuy", 42];
let z: Array<any> = [10, "hello"];

let notSure: any = false;
notSure = 42;

// Enum Type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up;      // 0
Directions.Down;    // 1
Directions.Left;    // 2
Directions.Right;   // 3

enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

Directions.Up;      // 2
Directions.Down;    // 4
Directions.Left;    // 6
Directions.Right;   // 7

// Never Type
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

const infiniteLoop = (): never => {
    while (true) {
    }
};

// Void Type
const create = (o: object | null): void => { };

create(1);		// Argument of type '1' is not assignable to parameter of type 'object | null'
create('42');	// Argument of type '"42"' is not assignable to parameter of type 'object | null'
create({ obj: 1 });

// Multiple types for one value
let id: number | string;

id = 10;
id = '42';

// Type
type Name = string;

let id: Name;

id = 10;	// Type '10' is not assignable to type 'string'
id = '42';
