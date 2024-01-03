let userScore=0;
let compScore=0;
let displayChoices=document.querySelector("#display-choices-section");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice=choice.getAttribute("id");
        gameLogic(choice, userChoice);
    });
});


let gameLogic=(choice, userChoice) => {
    let compChoice=getCompChoice();
    displayCompChoice(compChoice);
    displayUserChoice(choice);
    if(userChoice===compChoice)
    {
        msg.innerText="Draw ⚔️";
        msg.style.backgroundColor="white";
        msg.style.color="black";
    }
    else 
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper")
                userWin=false;
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="scissors")
                userWin=false;
        }
        else
        {
            if(compChoice==="rock")
                userWin=false;
        }
        checkWinner(userWin);
    }
}

let getCompChoice=() => {
    let options=["rock", "paper", "scissors"];
    let randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}

let checkWinner=(userWin) => {
    if(userWin===true)
    {
        msg.innerText="You Win! 😎";
        msg.style.backgroundColor="green";
    }
    else
    {
        msg.innerText="You Lose ☹️";
        msg.style.backgroundColor="red";
    }
}

let displayCompChoice=(compChoice) => {
    // if(displayChoices.childNodes[1]!==undefined)
    //     (displayChoices.childNodes[1].classList.add("hide"));

    let a=choices[0].childNodes[1].cloneNode(true);
    let b=choices[1].childNodes[1].cloneNode(true);
    let c=choices[2].childNodes[1].cloneNode(true);
    
    if(compChoice==="rock")
    {    
        displayChoices.prepend(a);
        a.setAttribute("class", "display-choices");   
    }
    else if(compChoice==="paper")
    {
        displayChoices.prepend(b);
        b.setAttribute("class", "display-choices");
    }
    else
    {
        displayChoices.prepend(c);
        c.setAttribute("class", "display-choices");
    }
    
}

let displayUserChoice=(choice) => {
    // if(displayChoices.childNodes[2]!==undefined)
    //     (displayChoices.childNodes[2].classList.add("hide"));

    let userChoiceDisplay=choice.childNodes[1].cloneNode(true)
    displayChoices.prepend(userChoiceDisplay);
    userChoiceDisplay.setAttribute("class", "display-choices");
    console.log(displayChoices.childNodes[0]);
}