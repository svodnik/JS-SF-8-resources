var song = document.createElement('ul');
document.body.append(song);
for (var i = 99; i > 0; i--) {
    var verse = document.createElement('li');
    if(i > 1) {
        verse.innerHTML = i + " bottles of beer on the wall, " + i + " bottles of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.";
    } else {
        verse.innerHTML = i + " bottle of beer on the wall, " + i + " bottle of beer, you take one down, pass it around, " + (i - 1) + " bottles of beer on the wall.";        
    }
    song.appendChild(verse);
}