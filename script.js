let choices = ["rock", "paper", "scissors"]
function computer() {
    var n = Math.floor((Math.random() * 3))
    return choices[n];
}

let userChoice = ""
let uscore = 0
let total = 0
    let r = document.querySelector(".R")
    r.addEventListener("click", setVal)
    function setVal() {
        userChoice = "rock"
        game()
    }
    let p = document.querySelector(".P")
    p.addEventListener("click", setVal2)
    function setVal2() {
        userChoice = "paper"
        game()
    }
    let s = document.querySelector(".S")
    s.addEventListener("click", setVal3)
    function setVal3() {
        userChoice = "scissors"
        game()
    }
    let set = document.querySelector(".Set")
    set.addEventListener("click", reset)
    function reset() {
        uscore = 0
        total = 0
        let res = document.querySelector(".output")
        res.innerText = "New Game"
    }


function game() {
    total++
    var computerChoice = computer()
    if (userChoice == computerChoice) {
        let res = document.querySelector(".output")
        uscore++
        total++;
        res.innerText = `It's a tie, Your Score : ${uscore} , Compute Score : ${total - uscore}`
    }
    else if  ( (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ) {
        let res = document.querySelector(".output")
        uscore++
        res.innerText = `You win, computer chose ${computerChoice}, Your Score : ${uscore} , Compute Score : ${total - uscore}`

    }
    else {
        let res = document.querySelector(".output")
        res.innerText = `You lose, computer chose ${computerChoice}, Your Score : ${uscore} , Compute Score : ${total - uscore}`
    }
}
