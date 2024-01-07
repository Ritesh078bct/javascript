let userScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".choice");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");
let msg = document.querySelector(".msg");





const generateComputerChoice = () => {
    const options = ["rock", "scissors", "paper"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const gameDraw = () => {
    msg.innerText = "Game draw"
    msg.style.backgroundColor = "orange";
    msg.style.color = "white";
}
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats computer's ${computerChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";

    }
    else {
        computerScore++;
        computer.innerText = computerScore;
        msg.innerText = `Your ${userChoice} beaten by computer's ${computerChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}
const playGames = (userChoice) => {
    // console.log("user",userChoice);
    let computerChoice = generateComputerChoice();
    //   console.log("computer",computerChoice);
    if (userChoice === computerChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice == "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice == "rock" ? true : false;
        }
        else {
            userWin = computerChoice == "paper" ? true : false;
        }
        showWinner(userWin, userChoice, computerChoice);

    }


}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGames(userChoice);
        // console.log(ch);
    });
});

