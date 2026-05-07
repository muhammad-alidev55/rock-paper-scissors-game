const buttons = document.querySelectorAll(".box");
const msgLst = document.querySelector(".msg");
const scoreC = document.querySelector("#scorecomp");
const scoreU = document.querySelector("#scoreyou");
let userScore = 0;
let computerScore = 0;
let winner;

const compChoice = () => {
    const choices = ["Rock", "Paper", "Scissor"]
    let randomIdx = Math.floor(Math.random() * 3);
    let comp = choices[randomIdx];
    return comp;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const userChoice = event.target.id;
        console.log("User choice is: ",userChoice);
        let compGive = compChoice(); 
        console.log("Computer choice is:", compGive);

        res(compGive, userChoice);
    });
    
});

function res(compGive, userChoice){
    if(compGive === userChoice){
      msgLst.innerText = "Draw the Match!";
      msgLst.style.backgroundColor = "rgb(11,64,90)";
      return;
    }

    if(compGive === "Rock" &&  userChoice === "Paper"){
        winner = "user";
        msgLst.innerText = `You Win! Your ${userChoice} beat ${compGive}.`;
    }

    if(compGive === "Rock" &&  userChoice === "Scissor"){
        winner = "comp";
        msgLst.innerText = `Computer Win! ${compGive} beat your ${userChoice}.`;
    }

    if(compGive === "Paper" &&  userChoice === "Rock"){
        winner = "comp";
        msgLst.innerText = `Computer Win! ${compGive} beat your ${userChoice}.`;
    }

    if(compGive === "Paper" &&  userChoice === "Scissor"){
        winner = "user";
        msgLst.innerText = `You Win! Your ${userChoice} beat ${compGive}.`;
    }

    if(compGive === "Scissor" &&  userChoice === "Rock"){
        winner = "user";
        msgLst.innerText = `You Win! Your ${userChoice} beat ${compGive}.`;
    }

    if(compGive === "Scissor" &&  userChoice === "Paper"){
        winner = "comp";
        msgLst.innerText = `Computer Win! ${compGive} beat your ${userChoice}.`;
    }

    if(winner === "user"){
        userScore++;
        scoreU.innerText = userScore;
        msgLst.style.backgroundColor = "green";
        return;
    }else if(winner === "comp"){
        computerScore++;
        scoreC.innerText = computerScore;
        msgLst.style.backgroundColor = "red";
        return;
    }
}