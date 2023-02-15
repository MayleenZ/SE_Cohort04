const choices = ["rock", "paper", "scissors"];
const randomNum = Math.floor(Math.random() * choices.length);
//choices.legnth will give back the length of the variable within
const compChoice = choices[randomNum];

let userChoice = "";
let isNotValid = true;
//we need a true value for the while loop, because we need a condition for it to run. Needs a truthy value either true or false is easier to understanding. Its not a valid entry until i check if its a valid entry.  
while (isNotValid) {
  userChoice = prompt("Please choose rock, paper or scissors")
  userChoice = userChoice.trim().toLowerCase();

  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    isNotValid = false;
  }
}

console.log(`User Choice : ${userChoice} || Computer Choice: ${compChoice}`);


if (userChoice === compChoice) {
  console.log("its a tie");
} else if (userChoice === "rock" && compChoice === "scissors") {
    console.log("You score!");
} else if (userChoice === "paper" && compChoice === "rock") {
    console.log("You Score");
} else if (userChoice === "scissors" && compChoice === "paper") {
    console.log("You score!");
} else {
    console.log("Computer score!");
    //WE ARE putting all of the choices from the persons perspective and everything else would be computer wins, that is why we dont have to write it and just write else 
}

