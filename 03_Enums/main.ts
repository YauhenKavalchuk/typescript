// Simple example of enum type
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

// Reverse enum
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions[0]	// "Up"
Directions[1]	// "Down"
Directions[2]	// "Left"
Directions[3]	// "Right"

// Compiled code
"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));

// Custom index for enum elements
enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

Directions.Up;	// 2
Directions.Down;	// 4
Directions[6];	// Left
Directions[8];	// Right

// Custom name for keys
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using
links.vk        // "https://vk.com/"
links.youtube 	// "https://youtube.com/"

// Compiled code
"use strict";
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));

// const enum (without using)
const enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Compiled code is empty
"use strict";

// const enum (with using)
const enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using of enum properties
const arr = [links.vk, links.facebook];

// Compiled code
"use strict";
const arr = ["https://vk.com/" /* vk */, "https://facebook.com/" /* facebook */];
