// Add display function to all digits
const digits = document.getElementsByClassName("digits");
Array.from(digits).forEach((digit) => {digit.addEventListener('click',display)});

// Add setOperator function to all operator buttons
const OPERATORS = document.querySelectorAll(".operators");
OPERATORS.forEach((operator) => operator.addEventListener('click',setOperator));

const EQUAL = document.querySelector("#equal");
EQUAL.addEventListener('click',equals);

const AC = document.querySelector("#ac");
AC.addEventListener('click',clear);

let displayArea = document.getElementById('display');

let operand1="";
let operand2="";
let currentOperator;
let result;
let isOperatorSelected = false;
let displayCleared = false;

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

        if(isOperatorSelected == false){
            operand1+=num;
        }
        else{
            if(displayCleared == false){
                displayArea.innerText = "";
                displayCleared = true;
            }
            operand2+=num;
        }
        displayArea.innerText+=num;
    }
    console.log(operand1);
    console.log(operand2);
}

function setOperator(e){

    if (displayArea!=null){
        if (!isOperatorSelected){ 
            currentOperator = e.target.innerText;
            isOperatorSelected = true;
        }
    }

    console.log(operand1);
}

function equals(e){
    displayArea.innerText = operate(currentOperator,operand1,operand2);
}

function clear(e){
    displayArea.innerText = "";
    operand1 = "";
    operand2 = "";
    isOperatorSelected = false;
    displayCleared = false;


}