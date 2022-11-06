// Add display function to all digits
const digits = document.getElementsByClassName("digits");
Array.from(digits).forEach((digit) => {digit.addEventListener('click',display)});

let displayArea = document.getElementById('display');

function add(op1,op2){
    return op1 + op2;
}

function subtract(op1,op2){
    return op1 - op2;
}

function multiply(op1,op2){
    return op1 * op2;
}

function divide(op1,op2){
    return op1 / op2;
}

function operate(operator, op1, op2){
    switch(operator){
        case "+":
            return add(op1,op2);
        case "-":
            return subtract(op1,op2);
        case "*":
            return multiply(op1,op2);
        case "/":
            return divide(op1,op2);
        
    }
}

function display(e){
    let num = e.target.innerText;
    
    //condition to prevent number overflowing
    if(displayArea.innerText.length <= 7){
        displayArea.innerText+=num;
    }
}