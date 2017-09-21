/*
  Write code to to calculate a customer's total cost in dollars based on product price, tax rate, shipping cost, and the currency they're using for the purchase (dollars or euros). 

  * Create a function called calcTotal() that accepts parameters for all the necessary information.
  * Start your calculations by converting the price from euro to dollars if necessary (HINT: use a conditional statement, and call the convertPrice() function.)
  * Calculate and store the total tax (price times tax).
  * Calculate and store the total cost (the total of price, total tax, and shipping).
  * Convert the total cost to two decimal places (HINT: look up the toFixed() method).
  * Log the total cost to the console, with text describing what the value is.
  * Call the function using both dollar and euro amounts and verify that the values returned are realistic.

  BONUS: Convert your function to assume a currency of "dollar" by default.
*/


// complete the calcTotal() function below:
function calcTotal() {

}


// accepts a price in euros and returns the same price in dollars
function convertPrice(price) {
  return (price * 1.2);
}

// add statements below to call your function
