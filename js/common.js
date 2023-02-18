// get input field value , function
function getInputFieldValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
}
// calculating area with 0.5 , function
function areaCalculationWithThreeNumbers(firstValue, secondValue){
    const number = 0.5;
    if(isNaN(firstValue) || isNaN(secondValue)){
        return;
    }
    if(firstValue < 0 || secondValue < 0){
        return;
    }
    const area = (number * firstValue * secondValue).toFixed(2);
    return area;
}
// calculating area with 2 numbers , function
function areaCalculationWithTwoNumbers(firstValue, secondValue){
    if(isNaN(firstValue) || isNaN(secondValue)){
        return;
    }
    if(firstValue < 0 || secondValue < 0){
        return;
    }
    const area = (firstValue * secondValue).toFixed(2);
    return area;
}
// get innerText value , function 
function getInnerTextValue(elementId){
    const innerField = document.getElementById(elementId);
    const innerFieldString = innerField.innerText;
    const innerFieldValue = parseFloat(innerFieldString);
    return innerFieldValue;
}
// calculating area of ellipse with pi
function calculateEllipseArea(firstValue,secondValue){
    const piNumber = 3.14;
    const area = piNumber * firstValue * secondValue;
    return area;
}

