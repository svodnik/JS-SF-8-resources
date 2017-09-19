/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: You can make your output appear on multiple lines by using the string \n to insert a line break.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

// solution using just an array and the forEach method:

let bottles = [99,98,97,96,95,94,93,92,91,90,
               89,88,87,86,85,84,83,82,81,80,
               79,78,77,76,75,74,73,72,71,70,
               69,68,67,66,65,64,63,62,61,60,
               59,58,57,56,55,54,53,52,51,50,
               49,48,47,46,45,44,43,42,41,40,
               39,38,37,36,35,34,33,32,31,30,
               29,28,27,26,25,24,23,22,21,20,
               19,18,17,16,15,14,13,12,11,10,
               9,8,7,6,5,4,3,2,1];

bottles.forEach(function(number) {
  console.log(number + " bottles of beer on the wall \n" + 
              number + " bottles of beer \n" + 
              "You take one down, pass it around \n" + 
              (number - 1) + " bottles of beer on the wall.");
});


// more concise solution using a for loop:

/*
for (var i = 99; i > 0; i--) {
    console.log(i + " bottles of beer on the wall \n" + 
                i + " bottles of beer \n" + 
                "You take one down, pass it around\n" + 
                (i - 1) + " bottles of beer on the wall.");
}
*/