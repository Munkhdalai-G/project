const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

let userScore = 0;

const turn = (choice) => {
  const computerChoice = computerChoicer();

  if (choice === "rock" && computerChoice === "scissors")
    console.log("user win");
  if (choice === "scissors" && computerChoice === "paper")
    console.log("user win");
  if (choice === "paper" && computerChoice === "rock") console.log("user win");
  if (choice === "paper" && computerChoice === "scissors")
    console.log("computer win");
  if (choice === "rock" && computerChoice === "paper")
    console.log("computer win");
  if (choice === "scissors" && computerChoice === "rock")
    console.log("computer win");
  if (choice === "rock" && computerChoice === "rock") console.log("draw");
  if (choice === "paper" && computerChoice === "paper") console.log("draw");
  if (choice === "scissors" && computerChoice === "scissors")
    console.log("draw");

  console.log(choice, computerChoice);
};
if (userScore === 2) {
  reset.style.display = "block";

  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

const resetGame = () => {
  userScore = 0;
  reset.style.display = "none";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  console.log(userScore);
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

// user oorin songolt oruuldag
// computer songodog
// hen ylsan esehiig shalgana
// user bolon computer onootoi bna /0/
// onoo nemne
