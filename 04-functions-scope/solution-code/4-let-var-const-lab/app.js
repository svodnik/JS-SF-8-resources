// PART A

// QUESTION 1
// Read the code below and discuss with a partner what you expect to happen.

// QUESTION 2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: Think about the scope of each variable declaration.

let cost = 17.52;

// Two possible solutions:
// 1) Declare variable before conditionals:
function setPayment() {
    let payMethod; // statement added
    if (cost < 10) {
//        let payMethod = 'cash';
        payMethod = 'cash'; // no longer necessary to declare variable, just to change its value
    } else {
//        let payMethod = 'credit';
        payMethod = 'credit'; // no longer necessary to declare variable, just to change its value
    }
    console.log("I'll pay with " + payMethod); 
}

// 2) Change variable declarations to use var instead of let:
/*
function setPayment() {
    if (cost < 10) {
//        let payMethod = 'cash';
        var payMethod = 'cash'; // var does not have block scope, so variable is available to entire function
    } else {
//        let payMethod = 'credit';
        var payMethod = 'credit'; // var does not have block scope, so variable is available to entire function
    }
    console.log("I'll pay with " + payMethod); 
}
*/

setPayment();

// PART B

// QUESTION 1
// Read through the following code and discuss with a partner what you expect it to do.

// QUESTION2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: What is the difference between using let and const for each variable?

function calcTotal(price, shipping) {
    const TAXRATE = 0.085;
//    const TOTALTAX;
    let totalTax; // could also use var; camel case is best practice
//    const TOTALCOST;
    let totalCost; // could also use var; camel case is best practice
//    TOTALTAX = TAXRATE * price;
    totalTax = TAXRATE * price; // changed case of variable name, so have to change this reference
//    TOTALCOST = (price + TOTALTAX + shipping).toFixed(2);
    totalCost = (price + totalTax + shipping).toFixed(2); // changed case of variable name, so have to change this reference
//    console.log('The total cost is $' + TOTALCOST);
console.log('The total cost is $' + totalCost);
}

calcTotal(85.94, 12.95);