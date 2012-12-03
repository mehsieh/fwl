var socket = io.connect('/');

socket.on('waiting', function(data) {
	console.log('waiting...');
	$('#waiting').slideDown();
	$('#tooManyPlayers').slideUp();
	$('#board-body').slideUp();
});

socket.on('tooManyPlayers', function(data) {
	console.log('waiting...');
	$('#tooManyPlayers').slideDown();
	$('#waiting').slideUp();
	$('#board-body').slideUp();
});

socket.on('play', function(data) {
  console.log('play game!');
  if (data.boardLetters == undefined) {
    display_list = data.display_list;
    score1 = data.score1;
    var s1_string = "Player 1: " + score1;
    $("#player1").html(s1_string);
    score2 = data.score2;
    var s2_string = "Player 2: " + score2;
    $("#player2").html(s2_string);
    player_turn = data.player_turn;
    for (var i=0;i<display_list.length;i++){
      display_list[i].in_display = false;
      window[display_list[i].b_id] = display_list[i];
      if (display_list[i].belongs_to == 0) {
        $('.letters').find('#'+display_list[i].b_id).css("background-color", "white");
      }
      else if (display_list[i].belongs_to == 1) {
        $('.letters').find('#'+display_list[i].b_id).css("background-color", "red");
      }
      else {
        $('.letters').find('#'+display_list[i].b_id).css("background-color", "blue");
      }
    }
    display_list = [];
  }
  else {
    for (var i=1;i<=25; i++){
      $('.letters').find('#b'+i).text(data.boardLetters[i]);
    }
  }
  $('#waiting').slideUp();
  $('#tooManyPlayers').slideUp();
	$('#board-body').slideDown();
});

function submit() {
  for (var l=0;l<display_list.length;l++) {
    word += display_list[l].value;
  }
  checkWord(word);
  return false;
};