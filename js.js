let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked!", userChoice);
        playGame(userChoice);
    });
});


const genCompChoice = () => {
    // Define the options available
    let options = ['Rock', 'Paper', 'Scissors'];
    // Generate a random index between 0 and 2
    const randIdx = Math.floor(Math.random() * options.length);
    // Return the choice at the random index
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "dodgerblue";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Log the user's choice
    console.log("User choice: ", userChoice);
    // Generate and log the computer's choice
    const compChoice = genCompChoice();
    console.log("Computer choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else { // Assuming userChoice is "Scissors"
            userWin = compChoice === "Rock" ? false : true;
        }
        // Display the result
        showWinner(userWin, userChoice, compChoice);
    }
};



