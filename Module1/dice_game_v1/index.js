
//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll;
// PLAYER scores one point
// otherwise, COMPUTER scores one point

// if a player reaches 5 points that player wins the game

//Math.floor() Math.round()
// let playerScore = 0;
// let compScore = 0;

// while(playerScore < 5 || compScore < 5) {
//     const dice1 = rollDice();
//     const dice2 = rollDice();

//     if (dice1 > dice2) {
//         playerScore+=1; 
//         console.log(`Player Score: ${playerScore}`);
//     } else if(dice2 > dice1) { 
//             compScore +=1; 
//             console.log(`Computer score: ${compScore}`);
//     } else if (dice1 === dice2) {
//     console.log('ITs a draw');
//     }
// }

// function rollDice(){
//     return Math.floor(Math.random() * 6) + 1;
// }



//* Condensed into many functions 
// let playerScore = 0;
// let computerScore = 0;

// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// while(playerScore < 5 && computerScore < 5) {
//     const playerRoll = rollDice();
//     const computerRoll = rollDice();

//     console.log("Player Roll: " + playerRoll);
//     console.log("Computer Roll: " + computerRoll);
//     checkDices(playerRoll, computerRoll)
   
// }

// function checkDices(playerRoll, computerRoll) {
//     if (playerRoll > computerRoll) {
//         playerScore += 1;
//         if (playerScore === 5) console.log("P1 WINNER");

//         console.log("Player Score: " + playerScore);
        
//     } else if (computerRoll > playerRoll)  {
//         computerScore += 1;
//         if (computerScore === 5) console.log("PC WINNER");

//         console.log("Computer Score: " + computerScore);

//     } else if (computerRoll === playerRoll) {
//         console.log("It's a draw!");
//     }
//

//* Rock Paper Scissors 

let p1Score = 0;
let p2Score = 0; 

while(p1Score < 4 || p2Score < 4) {
    const player1 = RPS();
    const player2 = RPS();

    if (player1 === 1 && player2 == 2) {
        p1Score+=1;
        console.log(`PlayerOne score: ${p1Score}`);
    } else if (player1 === 2 && player2 === 1){
        p2Score+=1;
        console.log(`PlayerTwo score: ${p2Score}`);
    } else if (player1 === player2){
        console.log("Its a draw");
    } else if (player2 == 2 && player1 ==3){
        p2Score +=1;
        console.log(`PlayerTwo score: ${p2Score}`);
    } else if (player2 === 3 && player1 === 2){
        p1Score += 1;
        console.log(`PlayerOne score: ${p1Score}`);
    } else {
        console.log('Try Again')
    }
}

function RPS(){
    const Rock = 1;
    const Scissor = 2;
    const Paper = 3;
    return Math.floor(Math.random() * 3) + 1;
}




