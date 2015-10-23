function newGame(){
  $("#pieces-played").html("");  
  $("#game-results").html("");
  $("#new-game").css("display", "none");
}

function winner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice)
    return "Its a draw";

  if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      return "You win";
    } else if (computerChoice === "Scissors") {
      return "You lose";
    }
  } else if (playerChoice === "Scissors") {
    if (computerChoice === "Rock") {
      return "You lose";
    } else if (computerChoice === "Paper") {
      return "You win";
    }
  } else if(playerChoice === "Rock") {
    if (computerChoice === "Paper") {
      return "You lose";
    } else if (computerChoice === "Scissors") {
      return "You win";
    }
  }
}

$(document).ready(function() {
    $("#rock").click(function() {;
        $.get("http://rock-paper-scissors-api.herokuapp.com/", function(data) {
          $("#gamestart").hide();
          $("#pieces-played").text("You played Rock, Computer played " + data);
          $("#game-results").text(winner("Rock", data));
          $("#new-game").show();
        });
    });

    $("#paper").click(function() {;
        $.get("http://rock-paper-scissors-api.herokuapp.com/", function(data) {
          $("#gamestart").hide();
          $("#pieces-played").text("You played Paper, Computer played " + data);
          $("#game-results").text(winner("Paper", data));
          $("#new-game").show();
        })
    });

    $("#scissors").click(function() {;
        $.get("http://rock-paper-scissors-api.herokuapp.com/", function(data) {
          $("#gamestart").hide();
          $("#pieces-played").text("You played Scissors, Computer played " + data);
          $("#game-results").text(winner("Scissors", data));
          $("#new-game").show();
        })
    });

    $("#new-game").click(function() {
        location.reload();
        this.hide();
        })
   
});


// 1. Add your code below these comments.
// 2. Ensure that your code is ran after the DOM is ready
// 3. Add Event Listeners to the buttons
// 4. When the button is pushed use ajax and retrieve the computers choice from http://rock-paper-scissors-api.herokuapp.com/
// 5. Display the players and the computers choice on the webpage
// 6. Use the function winner to determine the winner and display results on the page
// 7. Allow the user to play a new game
