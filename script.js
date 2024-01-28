let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");

let audio=new Audio("images/audio.mp3");


let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");




let choices=document.querySelectorAll(".choice");

let genCompChoice=()=>{
    let options= ["rock","paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}


let drawGame=()=>{
    msg.innerText="Game is Draw,Play again";
    msg.style.backgroundColor=" #1770ac";
    drawSound.play();
}


let playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    

    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
          userWin= compChoice==="scissors"?false:true;

        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

}


choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });

});

let showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText="You Win.";
        msg.style.backgroundColor="green";
        winSound.play();

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        
        msg.innerText="You lose. Computer Choose";
        msg.innerText=msg.innerText+" "+genCompChoice();
        msg.style.backgroundColor="red";
        loseSound.play();
    }
}

let winSound= new Audio("images/win.mp3");

let loseSound=new Audio("images/lose.mp3");

let drawSound=new Audio("images/Draw.mp3");


    
