var score1;
var score2;
var player_is = 1;

function letter(b_id, in_display, belongs_to)
  {
    this.b_id=b_id;
    this.in_display=in_display;
    this.belongs_to=belongs_to;
  }
  
// instantiate all letter buttons

var b1 = new letter('b1', false, 0);
var b2 = new letter('b2', false, 0);
var b3 = new letter('b3', false, 0);
var b4 = new letter('b4', false, 0);
var b5 = new letter('b5', false, 0);
var b6 = new letter('b6', false, 0);
var b7 = new letter('b7', false, 0);
var b8 = new letter('b8', false, 0);
var b9 = new letter('b9', false, 0);
var b10 = new letter('b10', false, 0);
var b11 = new letter('b11', false, 0);
var b12 = new letter('b12', false, 0);
var b13 = new letter('b13', false, 0);
var b14 = new letter('b14', false, 0);
var b15 = new letter('b15', false, 0);
var b16 = new letter('b16', false, 0);
var b17 = new letter('b17', false, 0);
var b18 = new letter('b18', false, 0);
var b19 = new letter('b19', false, 0);
var b20 = new letter('b20', false, 0);

var display_list = [];

function displayChange(letters)
 {
   var letter = window[letters];
   if (letter.in_display == false)
    {
      letter.in_display = true;
      var value = $(".letters").find("#"+letter.b_id).html();
      letter.value = value;
      display = "<div class='button' id='"+letter.b_id+"' >"+ letter.value + "</div>";
      $("#display").append(display);
      $(".letters").find("#"+letter.b_id).css("background-color", "black");
    }
 }