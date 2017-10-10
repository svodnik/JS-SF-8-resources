/* Independent Practice

Building a customizable to do list with jQuery

The HTML document contains an empty unordered list.
It also contains a text input box and a Create button.
Write jQuery to enable users to add elements to the to do list.
*/

// STEP 1
// Create a variable that contains a reference to the submit button element (which has the id value new-thing-button).
// HINT: Remember to use $ at the start of the variable name to indicate that it contains a jQuery object.

// let $button = $('#new-thing-button');

// STEP 2
// Create a variable that contains a reference to the empty list element (which has the id value to-do-list).

// let $todoList = $('#to-do-list');

// STEP 3
// Create a variable that contains a reference to the text box element (which has the id value new-thing).

// let $newItemInput = $('#new-thing');

// STEP 4
// Create an event listener for the click event on the button.
// Use the variable you created in Step 1 to reference the button element.

/*
$button.on('click', function(event) {
  event.preventDefault();
  let newItem = $newItemInput.val();
  let newLi = $('<li>').text(newItem);
  $todoList.append(newLi);
  $newItemInput.val('');
});
*/

// STEP 5
// Within the event listener, add statements that do the following:
// - Prevent the button's default click behavior from occurring
// - Create a variable that contains the value of the text box
// - Create a variable that contains a new list item element
// - Specify the value of the text box as the text content of the new list item element
// - Append the new list item element to the to do list, using the reference you created in Step 2.
// - Reset the value in the text box (Hint: the value when the page loads is an empty string)


// STEP 6
// Save your changes, open index.html in your browser, then test your app.



// BONUS:
// Use jQuery to add a "complete task" link at the end of each to-do item when it is added to the list.
// When clicked, the link should cross out the current item 
// (HINT: add a class to the list that sets the text-decoration property to line-through)


function addToList($list, item) {
  var $itemLi = $('<li>').text(item);
  $list.append($itemLi);
  addCompleteLinks($itemLi);
}

function addCompleteLinks($lis) {
  $lis.each(function() {
    var $newLink = $('<span>');
    var $linkWithText = $newLink.html(' complete task');
    var $completedLink = $linkWithText.addClass('complete-task');
    $(this).append($completedLink);
  });

  $('.complete-task').on('click', function(event) {
    // We don't need `event.preventDefault()` here
    // because there is no weird default action
    // when clicking on a `span` element.
    $(this).parent().addClass('completed');
  });
}

var $todoList = $('#to-do-list');
var $button = $('#new-thing-button');
var $newItemInput = $('#new-thing');

// The following statement results in a collection
var $todoListItems = $('#to-do-list li');
addCompleteLinks($todoListItems);

$button.on('click', function(event) {
  event.preventDefault();
  var newItem = $newItemInput.val();
  if (newItem === '') {
    alert('You must type in a value!');
  } else {
    addToList($todoList, newItem);
    $newItemInput.val('');
  }
});
