// This is a single-line comment !

/* This is a multi-line comment !
The code below is an example statement (instruction/command)
statements end with a semicolon ";"
*/
console.log("Welcome to JS"); 

/* A variable is a named storage container for data (information) 
*/


// Declare a new variable (make space, give it a name/label)
let username; 

// Assign a value (data) to the var 
username = "carolyn.s";

// see the value stored in the var 
console.log(username); 

// declare + assign in one step
let luckyNum = 13; // numbers don't need quotes
console.log(luckyNum);
// Change the value stpred in a variable (don't repeat LET) 
luckyNum = 7; 
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 15;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen); 
let ageDogYears = age / 7;
console.log(ageDogYears); 
// Can also do math with just numbers
let zeusHumanAge = 7 * 7;


// PEMDAS applies when you have multiple operators
let score = 0; 
score = score + 20 - 2 / 3 * (6 - 5); 
console.log(score);


// Combine two "literal" strings (CONCATENATION)
console.log("hello" + " world");
// OR concatenate a literal string with a variable
console.log("my age is " + age);
console.log("my age in ten years is " + ageInTen);
console.log("my age in dog years is " + ageDogYears); 

// can also concatenate while making variables 
let message = "welcome " + username + "!";
console.log(message);


/* FUNCTIONS: 
    Reusable sets of code statements
    that perform a specific task/proocess
*/

// console.log() is a built in FUNCTION we use a lot
// TASK: display data in the console (always works the same)
console.log("I just used a function!"); 
// if a function needs something in the parenthesis,
// we say it requiires PARAMETERS (input)

// DEFINE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute in this routine
    console.log("1. Cleanse");
    console.log("2. Apply serums");
    console.log("3. Moisturize");
}

// CALL the function to use it !
skincare();

// ANALOGY: Functions are like RECIPIES
// Ex. of a function that needs PARAMETERS (input/"ingredients") and RETURNS a new value (output/"meal")

//if you need parameters, list some variables inside the parenthesis after the function name
function makeSando(filling, sauce, bread) {
    let sando; // new variable to represent sandwich
        sando = filling + " and " + sauce + " on " + bread;
    return sando; // OUTPUT !
} 

// must "pass in" actual arguments to use the function 
let mySando = makeSando("swiss", "beef", "hero");
console.log(mySando);

// shortcut to see return values
console.log( makeSando("pb", "j", "wonderbread") );

/* Selection/branching (CONDITIONALS) 
    A BOOLEAN EXPRESSION is like a QUESTION that has a boolean ANSWER (true/false) 
*/

console.log(1 > 2); // false is the ANSWER
console.log("Is 10 less than 5?");
console.log(10 < 5);


// Check for EQUALITY using the == operator (or ===)
console.log(1 == 1); // true yay!
console.log(1 != 1); // false --> asking if NOT equal
console.log("yes" == "yes"); // works for Strings!
console.log("nick" != "duncan");

// Strings can be compared too
console.log("Arian" > "Carolyn"); 
console.log("zebra" > "dog"); // true Z comes later than d
console.log("apple" < "banana"); // true A comes before B
console.log("pelican" > "PELICAN"); // case matters !

// Can use comparison operators btw VARIABLES & values too
let password = "cute392"
console.log("8rtueishf" == password);

// IF STATEMENTS use conditionals aka boolean expressions to 
// make DECISIONS about which code to execute (run)
let userAge = 16; 

if (userAge >= 17) {
    // code in the curly brakets only runs if TRUE!
    console.log("you are old enough for a NY license");
}

// ELSE IF blocks let you test multiple options
else if (userAge == 16) {
    console.log("you can get a learners permit");
}

// ELSE BLOCK accounts for the "otherwise..." case 
else {
    console.log("too young to drive");
    }
