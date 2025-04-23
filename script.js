/**/

/*create a function to get computer`s choice*/
function getComputerChoice() {
    
/*generate a 3 random numbers and assign to value*/    
    num = Math.floor(Math.random()*3)+1
    value = num

/*assigning a value to each number*/
    if (value === 1) {
        console.log(`rock`)
    } else if (value ===2) {
        console.log(`paper`)
    } else {
        console.log(`scissors`)
    }
    return value;
}

console.log(getComputerChoice());


/**/
/*create a function to get the human(user`s) choice*/
function getHumanChoice() {
   
/*get input and convert to a common case ie. lower case*/    
    input = prompt().toLowerCase()
    value = input

/*check if the input value is an incorrect type*/    
    if (!(value === 'rock' || value === 'paper' || value === 'scissors')) {
        console.log(alert(`${value} is invalid`) || `${value} is invalid`)        
    }else{
        return value;
    } 
}

console.log(getHumanChoice());

/**/
/*players score*/
let humanScore = 0;

let computerScore = 0;

console.log(humanScore);
console.log(computerScore);

/**/
/*create a function for each round and for scores*/
function playRound() {

 /*assigning the various input recieved*/   
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

/*add point to score if won*/    
    if (humanChoice === computerChoice) {
        humanScore +=1;
    } else {
        computerScore +=1 ;
    }

    return {humanScore , computerScore} ;
}

console.log(playRound());

