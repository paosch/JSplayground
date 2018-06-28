var players = [];
var tokens = ["X", "0"]
var turn = 0;
var scores = [0,0];
players[0] = "player A";
players[1] = "player B";
var winNumbers = [ 7,56,73,84,146,273,292,448 ]
var gameOver = false;

function calculatewinner(){
  for (var i = 0; i < winNumbers.length; i++){
    if((winNumbers[i] & scores[turn]) == winNumbers[i]){
      gameOver = true;
      document.getElementById("intro").innerText = players[turn] + " wins!";
      var audio = new Audio('applause8.wav');
      audio.play();
    }
  }
}

function trackScore(playerPoints){
  scores[turn] += playerPoints;
}

function play(clickedDiv, divPoints){
  if(!gameOver){
    clickedDiv.onclick = "";
    trackScore(divPoints);
    clickedDiv.innerHTML = "<span>"+ tokens[turn] +"</span>";
    calculatewinner();
    if (!gameOver) { switchturn(); }
  }
}

function switchturn(){
  if(turn == 0) turn = 1;
  else turn = 0;
  document.getElementById("intro").innerText = players[turn] + "'s Turn";
}
