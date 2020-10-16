const roll = document.getElementById("roll");
const startAgain = document.getElementById("startAgain");
const image = document.getElementById("image");
let score = document.getElementById("score");
let playerScore = 0;


const rollDice = () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    score.textContent = dice;
    image.src = "./img/dice" + dice + ".png";
    if (dice !== 1) {
        playerScore += dice;
        score.textContent = playerScore;
    } else {
        startAgain.style.visibility = "visible";
        roll.style.visibility = "hidden";
        score.textContent = `A 1! Try again...`
    }
    if (playerScore == 20) {
        startAgain.style.visibility = "visible";
        roll.style.visibility = "hidden";
        score.textContent = `${playerScore}: You win!`

    } else if (playerScore > 20) {
        startAgain.style.visibility = "visible";
        roll.style.visibility = "hidden";
        score.textContent = `${playerScore}: try again.`

    }
}

const playGame = () => {
    roll.style.visibility = "visible";
    startAgain.style.visibility = "hidden";
    // playerScore == 0;
    // score.textContent = playerScore;
    roll.addEventListener("click", rollDice);
    rollDice();    
}

startAgain.addEventListener("click", () => {
    window.location.reload(true);
    playGame();

})
playGame();
