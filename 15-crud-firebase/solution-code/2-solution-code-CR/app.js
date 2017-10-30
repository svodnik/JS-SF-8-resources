// Initialize Firebase
let config = {
    apiKey: "AIzaSyByltC3JIKFE7DP4GaRikdXUx3nrauJCrY",
    authDomain: "new-secret-app.firebaseapp.com",
    databaseURL: "https://new-secret-app.firebaseio.com",
    storageBucket: "new-secret-app.appspot.com",
    messagingSenderId: "465362591766"
};
firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/firebase.database
let messageAppReference = firebase.database();

$(document).ready(function() {
    $('#message-form').submit(function (event) {
        // by default a form submit reloads the DOM which will subsequently reload all our JS
        // to avoid this we preventDefault()
        event.preventDefault()

        // grab user message input
        let message = $('#message').val()

        // clear message input (for UX purposes)
        $('#message').val('')

        // create a section for messages data in your db
        let messagesReference = messageAppReference.ref('messages');

        // use the push method to save data to the messages
        // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
        messagesReference.push({
            message: message,
            votes: 0
        });
        console.log(messagesReference);
    });
    getPosts();
});

function getPosts() {
    // retrieve messages data when .on() initially executes
    // and when its data updates
    // https://firebase.google.com/docs/reference/js/firebase.database.Reference
    // https://firebase.google.com/docs/database/web/read-and-write#listen_for_value_events
    messageAppReference.ref('messages').on('value', function (results) {
      let $messageBoard = $('.message-board');
      let messages = [];

      let allMsgs = results.val();
      // iterate through results coming from database call; messages
      for (let msg in allMsgs) {
        let message = allMsgs[msg].message;
        let votes = allMsgs[msg].votes;

        // create message element
        let $messageListElement = $('<li>');

        // create delete element
        let $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');

        // create up vote element
        let $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');
 
        // create down vote element
        let $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

        // add id as data attribute so we can refer to later for updating
        $messageListElement.attr('data-id', msg);

        // add message to li
        $messageListElement.html(message);

        // add delete element
        $messageListElement.append($deleteElement);

        // add voting elements
        $messageListElement.append($upVoteElement);
        $messageListElement.append($downVoteElement);

        // show votes
        $messageListElement.append('<div class="pull-right">' + votes + '</div>');

        // push element to array of messages -- this is pushing to an array, not HTTP push
        messages.push($messageListElement);
      }

      // remove lis to avoid dupes 
      // .empty() is a jQuery method to remove all child nodes
      $messageBoard.empty();
      for (let i in messages) {
        $messageBoard.append(messages[i]);
      }
    });
  }

