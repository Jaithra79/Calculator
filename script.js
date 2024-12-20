const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

let operation;

function appendNumber(number){
    if (number === "." && currDisplay.innerText.includes(".")) 
    return;
    currDisplay,innerText += number;
}

function chooseOperation(operand){
    if (currDisplay.innerText === "")
return;
    compute(operand);
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText="";
}

function compute(operand){
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue))
    return;

    switch (operation){
            case "+":
            result=previousValue+currentValue;
            break;
            case "-":
            result=previousValue-currentValue;
            break;
            case "*":
            result=previousValueX*currentValue;
            break;
            case "/":
            result=previousValue/currentValue;
            break;
            default:
                return;
    }
}

