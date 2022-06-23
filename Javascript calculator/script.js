
// program for calculator

//Declaring variables
let result, operator, firstNumber, secondNumber

//Assigning variables to each prompt input
firstNumber = parseInt(prompt(`Enter first number`)) 
operator = prompt('Enter one operator i.e  +  or  -  or  *  or  /')
secondNumber = parseInt(prompt(`Enter second number`)) 

// using if...else if... else
//checking for the operation choosen by the user
if(operator == '+'){
    result = firstNumber + secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if(operator == '-'){
    result = firstNumber - secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if(operator == '*'){
    result = firstNumber * secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else if (operator == '/'){
    result = firstNumber / secondNumber
    alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
}
else{
    alert(`Invalid Operation: ${firstNumber} ${operator} ${secondNumber}`)
}
//Log full result of calcution
console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`)