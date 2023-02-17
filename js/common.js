
function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}

function areaCalculationWithThreeNumbers(firstValue, secondValue){
    const number = 0.5;
    const area = number * firstValue * secondValue;
    return area;
}

function areaCalculationWithTwoNumbers(firstValue, secondValue){
    const area = firstValue * secondValue;
    return area;
}

function getInnerTextValue(elementId){
    const innerField = document.getElementById(elementId);
    const innerFieldString = innerField.innerText;
    const innerFieldValue = parseFloat(innerFieldString);
    return innerFieldValue;
}

function setInnerTextValueWithThreeNumbers(elementId,firstValue,secondValue){
    const innerField = document.getElementById(elementId);
    const totalArea = areaCalculationWithThreeNumbers(firstValue, secondValue);
    innerField.innerText = totalArea;
}

function setInnerTextValueWithTwoNumbers(elementId,firstValue,secondValue){
    const innerField = document.getElementById(elementId);
    const totalArea = areaCalculationWithTwoNumbers(firstValue, secondValue);
    innerField.innerText = totalArea;
}

function calculateEllipseArea(firstValue,secondValue){
    const piNumber = 3.14;
    const area = piNumber * firstValue * secondValue;
    return area;
}

function setEllipseValue(elementId,firstValue,secondValue){
    const innerField = document.getElementById(elementId);
    const totalArea = calculateEllipseArea(firstValue, secondValue);
    innerField.innerText = totalArea;
}