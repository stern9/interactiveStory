var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt("Please type an adjective" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt("Please type an verb" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt("Please type an noun" + questionsLeft);
alert("All done. Ready for the message?");
var sentence = "<h2>There once was a " + adjective + 
	" programmer who wanted to use JavaScript to "
  	+ verb + " the " + noun + ".</h2>";   
document.write(sentence);