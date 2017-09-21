
// -------------------------------------------------------------------------------
// Part 1 - Declaring and calling functions
// -------------------------------------------------------------------------------

// 1. Declare a function. Give it the name "logDate".
  // a. Inside the function, log the following value to the console:
  //    new Date()
  //    (Note: This code uses the Date object to fetch the current date and time.)


// 2. Call the function



// -------------------------------------------------------------------------------
// Part 2 - Predicting outcomes
// -------------------------------------------------------------------------------

// ---- A ------

// Look at the below function. Predict what will happen when the function is called.

function hotOrNot (temp) {
	if (temp > 75) {
		console.log("It's so hot!");
	} else {
		console.log("It's not hot.");
	}
}

hotOrNot(76);


// ---- B ------

// Look at the below function. Predict what will happen when the function is called.
function priceCheck (title, listPrice, taxRate) {
    var salesTax = listPrice * taxRate;
    var total = listPrice + salesTax;
    console.log(title + ' costs $' + total + '.');
}

priceCheck('Catcher in the Rye', 15, .10);





// -------------------------------------------------------------------------------
// Part 3 - Combining functions
// -------------------------------------------------------------------------------


function makeAPizza () {
  var topping1 = 'pepperoni';
  var topping2 = 'cheese';
  var topping3 = 'mushrooms'

  console.log('Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');
}


makeAPizza();



function makeAVeggiePizza () {
  var topping1 = 'peppers';
  var topping2 = 'onions';
  var topping3 = 'mushrooms'

  console.log('Coming right up! A pizza with ' + topping1 + ', ' + topping2 + ' and ' + topping3 + '.');  
}


makeAVeggiePizza();

// -------------------------------------------------------------------------------
// Part 4 - Scope
// -------------------------------------------------------------------------------

// ---- A ------
// Fix the following function so that we aren't getting an error! 
// Hint: move this line: $('#greeting').html("Hello " + name);

var sayHello = function () {
    var name = "Marie";
}

sayHello();
console.log("Hello " + name);


// ---- B ------

// We'd like total to keep track of the running total. Each time the scorePoint function
// is called, one should be added to total. We were expecting 1, 2, and 3 to be appended to the listPrice
// but right now we see 1, 1, and 1.
// Fix the following function. Right now the total is resetting every time the function runs.
function scorePoint () {
   var total = 0;
   total += 1;
   console.log(total);
}

scorePoint();
scorePoint();
scorePoint();
