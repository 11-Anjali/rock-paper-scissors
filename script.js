var choices = ["rock" , "paper", "scissors"]

function computer() {
    var n = Math.floor((Math.random() * 3))
    return choices[n];
}

function game() {
    var userChoice = prompt("Enter 1-Rock, 2-Paper, 3-Scissors")
    if (userChoice == 1) {
        userChoice = "rock"
    }
    else if(userChoice == 2) {
        userChoice = "paper"
    }
    else if (userChoice == 3) {
        userChoice = "scissors"
    }
    else {
        console.log("Invalid choice")
        return
    }

    var computerChoice = computer()
    if (userChoice == computerChoice) {
        console.log("It's a tie")
    }
    else if  ( (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ) {
        console.log(`You win, computer chose ${computerChoice}`)
    }
    else {
        console.log(`You lose, computer chose ${computerChoice}`)
    }
}
game()