let heading = document.querySelector(".heading2");
let btn = document.querySelector("button");
let choice = document.querySelector(".choices");
let singleChoices = document.querySelectorAll(".choice");
let score = document.querySelector(".scores");
let userComputer = document.querySelector(".user-comp");
let end = document.querySelector(".ending");

let userScore = 0;
let computerScore = 0;

for(let singleChoice of singleChoices) {
    singleChoice.addEventListener("click", () => {
        singleChoice.classList.toggle("clicked");
        checkScore(userScore, computerScore);
        let computerChoice = Math.floor(Math.random() * 3);
        let userChoice = singleChoice.innerHTML;
        let stone = singleChoices[0].innerHTML;
        let paper = singleChoices[1].innerHTML;
        let scissor = singleChoices[2].innerHTML;
        
        if(userChoice === stone && computerChoice === 0) {
            end.innerText = "Draw! Play Again";
            end.style.backgroundColor = "red";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === stone && computerChoice === 1) {
            end.innerText = "Computer Wins! Computer's paper beats your stone";
            score.children[1].innerText = ++computerScore;
            score.children[1].classList.toggle("clicked");
            end.style.backgroundColor = "blue";
            end.style.marginLeft = "430px";
            end.style.width = "700px";
            end.style.height = "60px";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === stone && computerChoice === 2) {
            end.innerText = "You Win! Your stone beats computer's scissor";
            score.children[0].innerText = ++userScore;
            score.children[0].classList.toggle("clicked");
            end.style.backgroundColor = "#FF3EA5";
            end.style.marginLeft = "480px";
            end.style.width = "600px";
            end.style.height = "55px";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === paper && computerChoice === 0) {
            end.innerText = "You Win! Your paper beats computer's stone";
            score.children[0].innerText = ++userScore;
            score.children[0].classList.toggle("clicked");
            end.style.backgroundColor = "#FF3EA5";
            end.style.marginLeft = "480px";
            end.style.width = "600px";
            end.style.height = "55px";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === paper && computerChoice === 1) {
            end.innerText = "Draw! Play Again";
            end.style.backgroundColor = "red";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === paper && computerChoice === 2) {
            end.innerText = "Computer Wins! Computer's scissor beats your paper";
            score.children[1].innerText = ++computerScore;
            score.children[1].classList.toggle("clicked");
            end.style.backgroundColor = "blue";
            end.style.marginLeft = "450px";
            end.style.width = "700px";
            end.style.height = "60px";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === scissor && computerChoice === 0) {
            end.innerText = "Computer Wins! Computer's stone beats your scissor";
            score.children[1].innerText = ++computerScore;
            score.children[1].classList.toggle("clicked");
            end.style.backgroundColor = "blue";
            end.style.marginLeft = "420px";
            end.style.width = "700px";
            end.style.height = "60px";
            end.classList.toggle("clicked");
        } 
        else if(userChoice === scissor && computerChoice === 1) {
            end.innerText = "You Win! Your scissor beats computer's paper";
            score.children[0].innerText = ++userScore;
            score.children[0].classList.toggle("clicked");
            end.style.backgroundColor = "#FF3EA5";
            end.style.marginLeft = "480px";
            end.style.width = "600px";
            end.style.height = "55px";
            end.classList.toggle("clicked");
        } 
        else {
            end.innerText = "Draw! Play Again";
            end.style.backgroundColor = "red";
            end.classList.toggle("clicked");
        }
    })
}

let checkScore = (userScore, computerScore) => {
    if(userScore === 20 || computerScore === 20) {
        heading.classList.remove("hide");
        btn.classList.remove("hide");
        choice.children[0].classList.add("hide");
        choice.children[1].classList.add("hide");
        choice.children[2].classList.add("hide");
        score.children[0].classList.add("hide");
        score.children[1].classList.add("hide");
        userComputer.children[0].classList.add("hide");
        userComputer.children[1].classList.add("hide");
        end.classList.add("hide");
        
        if(userScore === 20) {
            heading.innerText = "Congratulations! You are winner 👏.";
        } else {
            heading.innerText = "You have lost 😌. Computer is winner.";
        }
    }
}

let startGame = () => {
    userScore = 0;
    computerScore = 0;
    heading.classList.add("hide");
    btn.classList.add("hide");
    choice.children[0].classList.remove("hide");
    choice.children[1].classList.remove("hide");
    choice.children[2].classList.remove("hide");
    score.children[0].classList.remove("hide");
    score.children[1].classList.remove("hide");
    userComputer.children[0].classList.remove("hide");
    userComputer.children[1].classList.remove("hide");
    end.classList.remove("hide");
    end.style.backgroundColor = "green";
    end.style.marginLeft = "520px";
    end.style.height = "50px";
    end.style.width = "500px";
    end.innerText = "Play the Game";
    score.children[0].innerText = "0";
    score.children[1].innerText = "0";
}

btn.addEventListener("click", startGame);
