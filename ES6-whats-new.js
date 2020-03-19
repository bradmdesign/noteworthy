//ES 6 Summarized - by Brad Mehlenbacher (m3l0n // bradmdesign)


// *******************
// ** LET AND CONST **
// *******************


// Function is now replaced by let and const. use const when a variable won't be changing, and use let when you want the variable to be changable.
// if your const is an object, the object properties can be changed, but not the object itself - for example, from an object to a string.

var a = 1 + 2; // This is the old way - don't do this anymore.

let a = 1 + 2; // This is great if a will be changing.

const a = 1 + 2; // This is what to write if a will always equal 1 + 2.

// In objects,

const obj = {
    name: "Brad",
    age: 30,
    dogsName: "Bear"
}

// You can change properties of an object, but you cannot change the object. The following will not work:

obj = 123

//That would come back with an error. However, if you were to write: 

obj.name = "Chad";

// That would change name to Chad. Object properties are not automatically constants, regardless of the type of the object itself.


// *******************
// ** DESTRUCTURING **
// *******************


// Destructuring simplifies declaring variables and results in writing less code. taking our above example of obj, which was: 

const obj = {
    name: "Brad",
    age: 30,
    dogsName: "Bear",
    powerLevel: 9000
}

// To avoid writing the following:

const name = obj.name;
const dogsName = obj.dogsName;
let age = obj.age;
let powerLevel = obj.powerLevel;

// You can now destructure the object, declaring all types of let or const in one line. So in order to declare both name and dogsName at once, you would now write:

const { name, dogsName } = obj;
let { age, powerLevel } = obj;

// Now, if you call name, it will be of type const, with the value previously in the obj object, and likewise with the other 3. Declare the type, choose which properties,
// and then tell the script from where to inherit the values.


// *******************************
// ** DYNAMIC OBJECT PROPERTIES **
// *******************************


// Previously with object properties they were quite simple - simple variables static on the left, argument on the right. Now we can have changing and dynamic variables using square brackets.

// For example, using our previous object above, which was: 

const obj = {
    name: "Brad",
    age: 30,
    dogsName: "Bear",
    powerLevel: 9000
}

// We can now have changing variables on the left. For example, if we were to change the script a little for generic responses:

const dynamicResponses = {
    ["Brad " + "Mehlenbacher"] : "Hello sir",
    [365 * obj.age] : "Days alive",
    ["Dog: " + obj.dogsName] : "Good boy!",
    [obj.powerLevel * 365] : "It's over 9000!!!"
}

// Will all now work, and create an extremely dynamic object. If you were to call dynamicResponses, you would receive:

// {10950: "Days alive", 3285000: "It's over 9000!!!", Brad Mehlenbacher: "Hello sir", Dog: Bear: "Good boy!"}


// ****************************************** 
// ** MULTIPLE OBJECT PROPERTY DECLARATION **
// ******************************************


// Another great time saver! You can now declare multiple object properties at once. If you had the following constants:

const name = "Brad";
const age = 30;
const favouriteFoods = ["Sushi", "Pizza", "Thai", "Hamburgers"];

// You could add all of these extremly easily, by declaring:

const me = { name, age, favouriteFoods};

// When calling me, you would receive the following object:

// {name: "Brad", age: 30, favouriteFoods: Array(4)}


// **********************
// ** TEMPLATE STRINGS **
// **********************

// This one was a long time coming. You can now easily add variables into your strings without the song and dance of multiple quotes, + signs etc. 

// OLD Version

var name = "Brad";
var jsAge = 20;
var myThoughts = "Wow " + name + ", I can't believe javascript is now " + jsAge + " years old!";

// You now use backticks (`) in place of quotes, and ${} in place of " + jsage + ". You will now use:

let myThoughts = `Wow ${name}, I can't believe javascript is now ${jsAge + 5} years old!`;

// Notice that you can also use complete expressions - for example, ${jsAge + 5} - within the curly brackets.
// This is much smoother, and comparable to how C# handles string concatenation.


// *********************
// ** ARROW FUNCTIONS **
// *********************


// Arrow functions shorten writing simple function codes - in <ES5

function add(a, b) {
    return a + b;
}

//is the same as writing (ES5+):

const add2 = (a,b) => a + b;

// const means the function won't be changing, the (a, b) act as parameters and tell the script that it's a function, and a+b denotes what is returned. You can also use this as an "if else"
// statement with a ternary operator, like so

const equal3 = (a,b,c) => a + b === 3 ? "Yes, it equals 3!" : a + b;

// The above would check if a + b is equal to 3 - if it does,  return 3, otherwise return what it actually equals.

// To bring it all together and combine arrow functions with template strings, you would write:

const equal3 = (a,b,c) => a + b === 3 ? "Yes, it equals 3!" : `No, it equals ${a + b}`;