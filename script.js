// Add display function to all digits
const digits = document.getElementsByClassName("digits");
Array.from(digits).forEach((digit) => {digit.addEventListener('click',display)});

// Add setOperator function to all operator buttons
const OPERATORS = document.querySelectorAll(".operators");
OPERATORS.forEach((operator) => operator.addEventListener('click',setOperator));

const percent = document.querySelector("#percent");
percent.addEventListener('click',setPercentage);

const decimal = document.querySelector("#decimal");
decimal.addEventListener('click',addDecimal);

const EQUAL = document.querySelector("#equal");
EQUAL.addEventListener('click',equals);

const AC = document.querySelector("#ac");
AC.addEventListener('click',clear);

const DEL = document.querySelector("#delete");
DEL.addEventListener('click',deleteNum);

window.addEventListener("keydown",keyPress, false);

let displayArea = document.getElementById('display');

let operand1="";
let operand2="";
let currentOperator;
let result;
let isOperatorSelected = false;
let displayCleared = false;

function add(op1,op2){
    return +op1 + +op2;
}

function subtract(op1,op2){
    return +op1 - +op2;
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
    //console.log(operand1);
    //console.log(operand2);
}

function setOperator(e){

    if (displayArea!=null){
        if (!isOperatorSelected){ 
            isOperatorSelected = true;
            //console.log("still here");
        }
        else{
            equals(e);
            operand1 = operate(currentOperator,operand1,operand2);
            operand2 = "";
            displayCleared = false;
            console.log("in else");
            console.log(operand1);
            console.log(operand2);
        }
        currentOperator = e.target.innerText;
        //console.log(e.target.innerText);
    }

}

function equals(e){
    /* let ans = operate(currentOperator,operand1,operand2);
    console.log(ans.toString().length);
    if(ans.toString().length >= 7){
        displayArea.innerText = ans.toFixed(7);
    }
    else{
        displayArea.innerText = roundAnswer(ans);
    } */

    displayArea.innerText = roundAnswer(operate(currentOperator,operand1,operand2));
    console.log(roundAnswer(operate(currentOperator,operand1,operand2)));
}

function clear(e){
    displayArea.innerText = "";
    operand1 = "";
    operand2 = "";
    isOperatorSelected = false;
    displayCleared = false;


}

function addDecimal(e){
    if (!displayArea.innerText.includes(".")){
        display(e);
    }
    
}

function roundAnswer(number){
    return Math.round(number * 1000) / 1000;
}

function deleteNum(e){
    if (!isOperatorSelected){
        operand1 = operand1.slice(0,-1);
    }
    else{
        operand2 = operand2.slice(0,-1);
    }
    displayArea.innerText = displayArea.innerText.slice(0,-1);
}

function setPercentage(e){
    if (!isOperatorSelected){
        operand1 = operand1/100;
    }
    else{
        operand2 = operand2/100;
    }
    displayArea.innerText = displayArea.innerText/100;
}

function keyPress(e){
    const key = document.querySelector(`button[data-key='${e.code}']`);
    //console.log(e.key + " " + e.keyCode + " " + e.code);
    key.click();
}