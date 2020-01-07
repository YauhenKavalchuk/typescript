// Just example of functionality
const SECRET: string = '123321';
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;

// ES5 Module
(function () {
    
    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

}());

// Namespace define
namespace Utils {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Call namespace method
namespace Utils {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

const myPass = Utils.getPass('Yauhen', 31);	// Property 'getPass' does not exist on type 'typeof Utils'

// Export data from Namespace
namespace Utils {

    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;

};

const myPass = Utils.getPass('Yauhen', 31);	// "Yauhen31"
const isSecret = Utils.isEmpty(Utils.SECRET);	// "false"

const PI = 3;				// No Errors

// Import/Export
// file Utils.ts
namespace Utils {

    export const SECRET: string = '123321';

    export const getPass = (name: string, age: number): string => `${name}${age}`;

};

// file Customers.ts
/// <reference path="Utils.ts" />

const myPass = Utils.getPass('Yauhen', 31);	// "Yauhen31"

// Import/Export (ES6 Modules)
// file Utils.ts
export const SECRET: string = '123321';

export const getPass = (name: string, age: number): string => `${name}${age}`;

// file Customers.ts
import { getPass } from "./Utils";

const myPass = Utils.getPass('Yauhen', 31);	// "Yauhen31"
