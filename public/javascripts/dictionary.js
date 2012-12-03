// Google dictionary API

function checkWord(word){
	try {
	$.ajax({
		url:"http://www.google.com/dictionary/json?",
		data: {
			callback: "showResult",
			q: word,
			sl: "en",
			tl: "en",
			restrict: "pr%2Cde",
			client: "te",
			format: "json"
			},
		jsonp: false,
	  	dataType: "jsonp",			
			crossDomain: true
			} );
		return false;
		} catch (e) {console.log(e.description);}
}

function showResult(response) {
  if (response.query.length < 2) {
	  window.alert("'"+ word + "' is not a valid word in our dictionary!");
    word = '';
	}
	else if (response.primaries != null) {
		// it is a valid word
		socket.emit('submitWord', {display_list: display_list, score1: score1, score2: score2, player_turn: player_turn});
    $("#display").text('');
    word = '';
  }
	else {
		window.alert("'"+ word + "' is not a valid word in our dictionary!");
    word = '';
  }
}