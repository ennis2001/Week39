/*
    Hi.
    The purpose is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    In this problem set, we focus specifically on lists, loops (for), and functions.
    I.e. use lists and loops, dont use "fancy" alternatives.

    DO NOT change the code provided unless the task specifically says you should.
*/

/* -----------------------------------------------------------------------------
// Task: Example
// Write the code to print out all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
// Task: A
// Write the code that will ensure the variable "sum" contains the sum of all
// the numbers in the list "tall".
*/
console.log("Task: A");

const tall = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
}

console.log("Sum:", sum); // This should print 15

/* -----------------------------------------------------------------------------
// Task: B
// Complete the function "summer" to return the sum of the numbers in the list.
*/
console.log("Task: B");

function summer(liste) {
    let sum = 0;
    for (let i = 0; i < liste.length; i++) {
        sum += liste[i];
    }
    return sum;
}

const sumB = summer(tall);

if (sumB === 15) {
    console.log("🎉 Task B is most likely correct");
} else {
    console.log("😱 Task B has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
// Task: C
// Write the code that will ensure the variable "differans" contains the
// difference of all the numbers in the list "andreTall".
*/
console.log("Task: C");

const andreTall = [6, 7, 8, 9];
let differans = andreTall[0];

for (let i = 1; i < andreTall.length; i++) {
    differans -= andreTall[i];
}

console.log("Differans:", differans); // This should print -18

/* -----------------------------------------------------------------------------
// Task: D
// Complete the function "differansier" to return the difference of the numbers
// in the list.
*/
console.log("Task: D");

function differansier(liste) {
    let differans = liste[0];
    for (let i = 1; i < liste.length; i++) {
        differans -= liste[i];
    }
    return differans;
}

const diffD = differansier(andreTall);

if (diffD === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}

/* -----------------------------------------------------------------------------
// Task: E
// Create a function "multipliser" that takes a list of numbers and returns
// their product.
*/
console.log("Task: E");

function multipliser(liste) {
    let produkt = 1;
    for (let i = 0; i < liste.length; i++) {
        produkt *= liste[i];
    }
    return produkt;
}

const resultat = multipliser([1, 2, 3, 4]);  // Example input: [1, 2, 3, 4]
console.log("Produkt:", resultat); // This should print 24