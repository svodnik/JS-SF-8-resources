var $song = $("<ul>");
$(document.body).append($song);
for (var i = 99; i > 0; i--) {
    var $verse = $("<li>");
    if(i > 1) {
        $verse.text(i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");
    } else {
        $verse.text(i + " bottle of beer on the wall, " + i + " bottle of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.");        
    }
    $($song).append($verse);
}