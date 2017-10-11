"use strict";

// Create a Fetch request and specify a function to call when we have a response
// Include a parameter for the function so we can work with the response object
fetch('http://data.consumerfinance.gov/api/views.json').then(function(response) {
  if (response.ok) {
    // If our request was successful, we get a value of true for the ok property of our response object
    // This is where we update our UI based on the response data
    return response.json();
  } else {
    // If the ok property of our response is false, there was an error or other problem with our request
    console.log('There was a problem with the request.');
  }
}).then(function(data) {
  console.log(data);
});