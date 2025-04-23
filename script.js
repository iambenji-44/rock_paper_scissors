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
    input = prompt()
    value = input.toLowerCase()

/*check if the input value is an incorrect type*/    
    if (!(value === 'rock' || value === 'paper' || value === 'scissors')) {
        console.log(alert(`${value} is invalid`) || `${value} is invalid`)        
    }else{
        return value;
    } 
}

console.log(getHumanChoice())