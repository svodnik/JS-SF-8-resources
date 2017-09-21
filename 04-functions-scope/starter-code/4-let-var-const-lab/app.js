// PART A

// QUESTION 1
// Read the code below and discuss with a partner what you expect to happen.

// QUESTION 2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: Think about the scope of each variable declaration.

let cost = 17.52;

function setPayment() {
    if (cost < 10) {
        let payMethod = 'cash';
    } else {
        let payMethod = 'credit';
    }
    console.log("I'll pay with " + payMethod); 
}

setPayment();

// PART B

// QUESTION 1
// Read through the following code and discuss with a partner what you expect it to do.

// QUESTION2
// Fix the function so the console.log() statement correctly logs the value.
// Hint: What is the difference between using let and const for each variable?

function calcTotal(price, shipping) {
    const TAXRATE = 0.085;
    const TOTALTAX;
    const TOTALCOST;
    TOTALTAX = TAXRATE * price;
    TOTALCOST = (price + TOTALTAX + shipping).toFixed(2);
    console.log('The total cost is $' + TOTALCOST);
}

calcTotal(85.94, 12.95);