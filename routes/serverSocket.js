// template for serverSocket.js

// initialize all variables
var currentPlayers = 0;
var score1;
var score2;
var display_list;
var player_turn;
var maxPlayers = 2;

// randomizes the board so that very time the server starts a new board is generated.
function generateBoard() {
  var boardLetters = [];
  for (var i=1;i<=25; i++){
    // use the ASCII value from 65-90 for letters
    var randomLetter = String.fromCharCode(Math.floor(Math.random()*25)+65);
    boardLetters.push(randomLetter);
  }
  return boardLetters;
};

exports.init = function(io) {
  
  io.sockets.on('connection', function (socket) {
		++currentPlayers;
		if (currentPlayers < maxPlayers) {
			socket.emit('waiting');
			socket.broadcast.emit('waiting');
		}
		else if (currentPlayers > maxPlayers){
		  socket.emit('tooManyPlayers');
			socket.broadcast.emit('tooManyPlayers');
		}
		else {
		  var boardLetters = generateBoard();
		  socket.emit('play', {boardLetters: boardLetters});
		  socket.broadcast.emit('play', {boardLetters: boardLetters});
		}
		
		socket.on('submitWord', function (data){
		  display_list = data.display_list;
		  console.log('word submitted');
		  score1 = data.score1;
		  score2 = data.score2;
		  player_turn = data.player_turn;
		  for (var i=0;i<display_list.length;i++) {
		    display_list[i].belongs_to = player_turn;
		  }
		  if (player_turn == 1) {
		    player_turn = 2;
		  }
		  else {
		    player_turn = 1;
		  }
		  socket.emit('play', {display_list: display_list, score1: score1, score2: score2, player_turn: player_turn});
		  socket.broadcast.emit('play', {display_list: display_list, score1: score1, score2: score2, player_turn: player_turn});
		});
		
		socket.on('disconnect', function() {
	  	--currentPlayers;
		});
		
 });
}