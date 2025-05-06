/*players score*/
let humanScore = 0;
let computerScore = 0;                                     


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


let content = document.querySelector('.content');
content.style.padding = '50px'

let playround = document.createElement('div');
let play = document.createElement('button');
play.classList.add('playRound')
play.textContent ='Play Round';
play.style.fontWeight = '300px';
play.style.color = 'green';

play.addEventListener('click', () => {
    playGame();;
})


playround.appendChild(play);
content.appendChild(playround);

//Various button for each value
let rockBtn = document.createElement('button');
rockBtn.classList.add('rock')
rockBtn.textContent = 'Rock ⛰';
rockBtn.style.padding = '30px';
rockBtn.style.margin = '15px';

rockBtn.addEventListener('click' , () => {
    playRound('rock')
})

content.appendChild(rockBtn);

let paperBtn = document.createElement('button');
paperBtn.classList.add('paper')
paperBtn.textContent ='Paper 📃';
paperBtn.style.padding = '30px';
paperBtn.style.margin = '15px';

paperBtn.addEventListener('click', () => {
    playRound('paper')
})

content.appendChild(paperBtn);

let scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissors')
scissorsBtn.textContent = 'Scissors ✂';
scissorsBtn.style.padding = '30px';
scissorsBtn.style.margin = '15px';

scissorsBtn.addEventListener('click' , () => {
    playRound('scissors')
})

content.appendChild(scissorsBtn);



/*create a function for each round and for scores*/
function playRound(humanChoice) {

    /*check if the input value is the parameter is an incorrect type*/    
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            console.log(`You choose ${humanChoice}`);       
        } 
        
 /*assigning the various input recieved*/   
    const computerChoice = getComputerChoice();

/*add point to score if won*/    
    if (humanChoice === computerChoice) {
        alert(`draw`);
    } else if ((humanChoice === `rock` && computerChoice === `scissors`) || 
    (humanChoice === `paper` && computerChoice ===`rock` ) || (humanChoice === `scissors` && computerChoice === `paper` )) {
        humanScore++ ;
    } else {
        computerScore++ ;
    }
   
    console.log(humanScore);
    console.log(computerScore);
    let result = `Human : ${humanScore} | Computer : ${computerScore}`;
    console.log(result);
    score.textContent = result;    
    
    if (humanScore === 5 ) {
        alert('You WON');
   } else if (computerScore === 5) {
        alert('Computer WON');
   }
    
}


//A div to display score
let score = document.createElement('div')
score.classList.add('score');

content.append(score);