function game() {
  let playerScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }

  function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")) {
      computerScore++
      return "You lose this round"
    } else if ((playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
      playerScore++
      return "You win this round"
    } else {
      return "Draw"
    }

}
  for(i=0; i<5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    return "You win the game"
  } else if (computerScore > playerScore) {
    return "You lose the game"
  } else {
    return "Draw"
  }
}

console.log(game())
