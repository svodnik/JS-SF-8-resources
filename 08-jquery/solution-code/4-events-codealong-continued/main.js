"use strict";

let addContent = document.querySelector('#add-content');
let inputBox = document.querySelector('input');
let campusesList = document.querySelector('#gaCampuses');

// add an event listener for the click event on the addContent button
addContent.addEventListener('click', function(event) {
  // prevent the button's default click behavior from happening
  event.preventDefault();
  // create a new li element
  let newItem = document.createElement('li');
  // create a new text node with the value from the input box
  let newItemText = document.createTextNode(inputBox.value);
  // append the new text node to the new li element
  newItem.appendChild(newItemText);
  // append the new li element to the list of campuses
  campusesList.appendChild(newItem);
  // reset the value of the input box to an empty string so it's ready for another query
  inputBox.value = '';
});