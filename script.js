/**/

/*create a function to get computer`s choice*/
function getComputerChoice() {
    
/*generate a 3 random numbers and assign to value*/    
   
    value =  Math.floor(Math.random()*3)+1;

/*assigning a value to each number*/
    if (value === 1) {
        console.log(`rock`);
        return `rock`;
    } else if (value === 2) {
        console.log(`paper`);
        return `paper`;
    } else {
        console.log(`scissors`);
        return `scissors`;
    }

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


function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 0; round <= 5; round++) {
        playRound();
        
    }
}

console.log(playGame());
