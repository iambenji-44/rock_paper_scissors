/**/

/*create a function to get computer`s choice*/
function getComputerChoice() {
    
/*generate a 3 random numbers and assign to value*/    
    const values =  ['rock', 'paper', 'scissors'];
    const randomIndex =  Math.floor(Math.random()*values.length);
    const value = values[randomIndex];
    console.log(value);
    return value;

/*
    if (value === 1) {
        console.log(`rock`);
        return `rock`;
    } else if (value === 2) {
        console.log(`paper`);
        return `paper`;
    } else {
        console.log(`scissors`);
        return `scissors`;
    }*/

}


/**/
/*create a function to get the human(user`s) choice*/
function getHumanChoice() {
   
/*get input and convert to a common case ie. lower case*/    
    let value = prompt(`Choose rock, paper or scissors`);
    value = value.toLowerCase();

/*check if the input value is an incorrect type*/    
    if (value === 'rock' || value === 'paper' || value === 'scissors') {
        console.log(`You choose ${value}`);       
    } else {
        console.log(`${value} is Invalid`);
        return getHumanChoice();
    }

}

/**/
/*players score*/
let humanScore = 0;
let computerScore = 0;



/**/
/*create a function for each round and for scores*/
function playRound() {

 /*assigning the various input recieved*/   
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

/*add point to score if won*/    
    if (humanChoice === computerChoice) {
        console.log(`draw`);
    } else if ((humanChoice === `rock` && computerChoice === `scissors`) || (humanChoice === `paper` && computerChoice ===`rock` ) || (humanChoice === `scissors` && computerChoice === `paper` )) {
        humanScore ++;
    } else {
        computerScore ++;
    }

    console.log(`Human : ${humanScore} | Computer : ${computerScore}`);
}

let content = document.querySelector('.content');
content.style.padding = '50px'


let rockBtn = document.createElement('button');
rockBtn.classList.add('rock')
rockBtn.textContent = 'Rock ⛰';
rockBtn.style.padding = '30px';
rockBtn.style.margin = '15px';

content.appendChild(rockBtn);

let paperBtn = document.createElement('button');
paperBtn.classList.add('paper')
paperBtn.textContent ='Paper 📃';
paperBtn.style.padding = '30px';
paperBtn.style.margin = '15px';

content.appendChild(paperBtn);

let scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissors')
scissorsBtn.textContent = 'Scissors ✂';
scissorsBtn.style.padding = '30px';
scissorsBtn.style.margin = '15px';

content.appendChild(scissorsBtn);




















/*function playGame() {
   

    for (let round = 1; round <= 5; round++) {
        playRound();
        
    }
}

console.log(playGame());*/
