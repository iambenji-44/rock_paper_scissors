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


