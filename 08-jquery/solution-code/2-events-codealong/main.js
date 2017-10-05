let addContent = document.querySelector("#add-content");
let head = document.querySelector('header');

// run this function when the document is loaded
//window.addEventListener('load', function() {
// updated to run when a user clicks the button
addContent.addEventListener('click', function() { 
// create an element and add it to the DOM
    let main_heading = document.createElement("h1");
    let heading_text = document.createTextNode("GA Campuses");
    main_heading.appendChild(heading_text);
    head.appendChild(main_heading);
}, false);

// run this function when the document is loaded
window.addEventListener('load', function() {  
  // apply the button-branding class to the button (selected above)
  addContent.className = "button-branding";

  // Target the list by id using the querySelector() method
  let campusesContainer = document.querySelector("#gaCampuses");
  // The querySelectorAll() method returns a live HTMLCollection of elements with the given tag name.
  let gaCampuses = campusesContainer.querySelectorAll("li");

  // We can iterate through the returned collection with a for loop
  for (let i = 0; i < gaCampuses.length; i++) {
    // Changing the value of the class attribute applies a prewritten style rule from our stylesheet
    gaCampuses[i].className = "list-elements";
  }
}, false);
