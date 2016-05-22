<!DOCTYPE html>
<html>
<head>
	<title>hangman</title>
</head>
<body>
<div id="park">
	<p>park capture</p>
</div>

<script type="text/javascript">
//parks list
	var parkChoices = ['denali', 'glacier bay','grand canyon','petrified forest','saguaro','arkansas hot springs','channel islands','death valley','joshua tree','kings canyon','redwood','sequoia','yosemite','great sand dunes','mesa verde','rocky mountain','biscayne','dry tortugas','everglades','yellowstone','acadia','glacier','great basin','carlsbad caverns','cuyahoga valley','crater lake','badlands','great smoky mountains','big bend','guadalupe mountains','virgin islands','arches','bryce canyon','capitol reef','canyonlands','zion','shenandoah','mount rainier','north cascades','olympic','grand teton'];

			console.log(parkChoices.length); //cofirm array 


var computerGuess;
var userGuessMatched =[];
var userGuessNoMatch =[];
	
var matched;
var userGuess;
var tries = 0;
var loses = 0;
var wins = 0;


var computerGuess = parkChoices[Math.floor(Math.random() * parkChoices.length)];
	console.log('computerGuess '+ computerGuess);

		//user inputs guess//

document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log('userGuess '+ userGuess);
		//in word?
	if ([computerGuess.indexOf(userGuess)] == -1){	 
		console.log('not matched');

		//if in word,already guessed?
				if([userGuessNoMatch.indexOf(userGuess)] == -1){
					userGuessNoMatch.push(userGuess);
					console.log('add to userGuessNoMatch'+userGuessNoMatch);
					tries++;
					console.log('1 tries = '+tries);
						if(tries > 3){
							console.log('calling lose function');
							lose();
							}
				}else{
					console.log('Opps! Already Guessed, Guess again Thanks!')
					}
		

	}else{
		console.log('matched');
	}
	
};

	function lose(){
		console.log('sorry you lost play again?');
		loses ++;
	};
			
		
</script>
</body>
</html>
