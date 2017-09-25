/*
1. Create a function that accepts a temperature value in Fahrenheit and converts it to Celsius.
   Note: Equation to convert F to C:
   C = (F - 32) / 1.8
   Test your function.
2. Create a second function that accepts a temperature value in Celsius and converts it to Fahrenheit.
   Note: Equation to convert C to F:
   F = 1.8 * C + 32
   Test your function.
BONUS 1: Update your functions to use the value entered in the text box on the web page, and to perform calculations only when the appropriate button is clicked:
	1.  Set the value of the temp variable to the value of the element with the id value 'temperature'.   
	    (Hint: read about the document.querySelector() method.)
	2.  Set the appropriate function to run when each button is clicked.
		(Hint: read about the addEventListener() method.)
BONUS 2: Display the result of each calculation in the browser window rather than in the console:
	1.  At the end of each function, set the text of the element with the id value 'result' to the same text string you were previously logging to the console.
BONUS 3: Clear the contents of the text box after you've displayed your results, so a user can easily enter another temperature to convert. (Hint: Read about the 'value' property in JavaScript. What string value could you assign as the value of an input box that would give it no content to display?)
*/

/*
function FtoC(temp) {
	let celsius = (temp - 32) / 1.8;
	celsius = celsius.toFixed(0);
	console.log(temp + "\u00B0F = " + celsius + "\u00B0C");		
}
function CtoF(temp) {
	let fahrenheit = 1.8 * temp + 32;
	fahrenheit = fahrenheit.toFixed(0);
	console.log(temp + "\u00B0C = " + fahrenheit + "\u00B0F");		
}

FtoC(75);
CtoF(0);
*/

// BONUS 1
/*
function FtoC() {
	let temp = document.querySelector('#temperature').value;
	let celsius = (temp - 32) / 1.8;
	celsius = celsius.toFixed(0);
	console.log(temp + "\u00B0F = " + celsius + "\u00B0C");		
}
function CtoF() {
	let temp = document.querySelector('#temperature').value;
	var fahrenheit = 1.8 * temp + 32;
	fahrenheit = fahrenheit.toFixed(0);
	console.log(temp + "\u00B0C = " + fahrenheit + "\u00B0F");		
}

document.querySelector('#fahrenheit_to_celsius').addEventListener("click", FtoC, false);
document.querySelector('#celsius_to_fahrenheit').addEventListener("click", CtoF, false);
*/

// BONUS 2 + 3

function FtoC() {
	let temp = document.querySelector('#temperature').value;
	let celsius = (temp - 32) / 1.8;
	celsius = celsius.toFixed(0);
//	console.log(temp + "\u00B0F = " + celsius + "\u00B0C");	
	document.querySelector('#result').innerHTML = temp + "\u00B0F = " + celsius + "\u00B0C";
	document.querySelector('#temperature').value = '';	
}
function CtoF() {
	let temp = document.querySelector('#temperature').value;
	var fahrenheit = 1.8 * temp + 32;
	fahrenheit = fahrenheit.toFixed(0);
//	console.log(temp + "\u00B0C = " + fahrenheit + "\u00B0F");		
	document.querySelector('#result').innerHTML = temp + "\u00B0F = " + fahrenheit + "\u00B0C";
	document.querySelector('#temperature').value = '';	
}

document.querySelector('#fahrenheit_to_celsius').addEventListener("click", FtoC, false);
document.querySelector('#celsius_to_fahrenheit').addEventListener("click", CtoF, false);