////////////
// PART 1 //
////////////

/* Step 1a

Below the let statement below, add a statement that sets the value of the firstItem variable to reference the first list item in the unordered list
(HINT: Use the querySelector() method.)

*/

let firstItem;
// Write your statement below this line:

firstItem = document.querySelector('li');

/* Step 1b

Write a statement that logs the class value of the element referenced by firstItem to the console.
(HINT: Use the className property.)

*/

console.log(firstItem.className);

/* Step 1c

Write a statement that sets the class value of the element referenced by firstItem to hover.
(HINT: Use the className property.)

*/

firstItem.className = 'hover';

/* Step 1d

Save your changes, load index.html in your browser, open the console, check the value you logged to the console, and verify in the browser window that the first item in the list of parks now has a white background.

*/

/* Step 1e

Think about user interfaces you've seen or created that change the background of a web page element. List 2 situations where you've used this technique or seen it done:

1. 
2. 

*/


////////////
// PART 2 //
////////////

/* Step 2a

Write a statement that logs the class value of the element referenced by firstItem to the console.

*/

console.log(firstItem.className);


/* Step 2b

Write a statement that sets the class value of the element referenced by firstItem to hidden.
(HINT: Use the className property.)

*/
firstItem.className = 'hidden';

/* Step 2c

Save your changes, load index.html in your browser, and verify that the first list item ("Buena Vista Park") is no longer displayed.

*/


/* Step 2d

Write a statement that removes the class value you set in Step 2a.
(HINT: Use the className property with an empty string as the value.)

*/

firstItem.className = '';

/* Step 2e

Save your changes, load index.html in your browser, check the value you logged to the console, and verify that the first list item ("Buena Vista Park") is once again displayed.

*/

/* Step 2f

Think about user interfaces you've seen or created that change whether a web page element is hidden or displayed. List 2 situations where you've used this technique or seen it done:

1. 
2. 

*/


///////////
// BONUS //
///////////

/*

Write statements to do the following:

- Create a new variable called items
- In the items variable, select and store a reference to all of the list items (li elements) on the web page
- Change the class value for all of the elements referenced in the items variable to hidden.
(HINT: Use the forEach() method.)

*/

let items;
items = document.querySelectorAll('li');
items.forEach(function(el) {
    el.className = 'hidden';
});