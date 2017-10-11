/*

Create an ajax request for the following data source:
https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

STEPS:
- Copy the code you created in the codealong.
- Change the URL to the one shown below.
- Verify that a new set of results is shown in the console.

BONUSES: 
- Customize the error message to display the text of the HTTP status message.
  (HINT: https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText)
- Refactor the code to work with user interaction. In the index.html file
there is a "Get Health Data" button. Modify your code so data is only requested and
logged to the console after a user clicks the button.

*/

// ADD YOUR CODE BELOW 

'use strict';

// Create a Fetch request and specify a function to call when we have a response
// Include a parameter for the function so we can work with the response object
fetch('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD').then(function(response) {
  if (response.ok) {
    // If our request was successful, we get a value of true for the ok property of our response object
    // This is where we update our UI based on the response data
    return response.json();
  } else {
    // If the ok property of our response is false, there was an error or other problem with our request
    // BONUS 1: statusText property of response object logged instead of generic error message
    console.log(response.statusText);
  }
}).then(function(data) {
  console.log(data);
});


// BONUS 2:

/* document.querySelector("#getDataButton").addEventListener('click', function() {
  fetch('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD').then(function(response) {
    if (response.ok) {
      // If our request was successful, we get a value of true for the ok property of our response object
      // This is where we update our UI based on the response data
      return response.json();
    } else {
      // If the ok property of our response is false, there was an error or other problem with our request
      console.log(response.statusText);
    }
  }).then(function(data) {
    console.log(data);
  });
}, false); */
