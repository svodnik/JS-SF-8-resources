/*
    Use jQuery ajax methods to look up the city and state for a zip code that users enter in the Postal Code box on the form.

    * STEP 1: Read the documentation at zippopotam.us. Note that zippopotam.us does not require an API key. 
    * STEP 2: Create an ajax request using the jQuery get() method. Log the response to the console.
    * STEP 3: Write code to identify that city and state values in the response and the update your code to log only those values to the console.

    BONUS 1: Enhance your code using DOM manipulation to populate the City and State input boxes with the returned data.
    BONUS 2: Instead of responding to a button click, add code to listen for the keyup event in the Postal Code box after a keyboard key is pressed and 
           released, and check if the Postal Code box contains sufficient characters for a zip code before performing a search automatically.
*/

'use strict';

let zip = document.querySelector('#zip'); 
let city = document.querySelector('#city');
let state = document.querySelector('#state');
let lookup = document.querySelector('#lookup');

lookup.addEventListener('click', getLocation, false);

function getLocation(event) {
    event.preventDefault();
    var zipString = zip.value; 
    $.get('http://api.zippopotam.us/us/' + zipString, function(response) {
        displayData(response);
    });
}

function displayData(response) {
    console.log(response.places[0]['place name']);
    console.log(response.places[0]['state abbreviation']);

// BONUS 1
//    city.value = response.places[0]['place name'];
//    state.value = response.places[0]['state abbreviation'];
}