
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

function getInnerTextValue(elementId){
    const innerField = document.getElementById(elementId);
    const innerFieldString = innerField.innerText;
    const innerFieldValue = parseFloat(innerFieldString);
    return innerFieldValue;
}

function setInnerTextValue(elementId,firstValue,secondValue){
    const innerField = document.getElementById(elementId);
    const totalArea = areaCalculationWithThreeNumbers(firstValue, secondValue);
    innerField.innerText = totalArea;
}
document.getElementById('btn-triangle-calculate').addEventListener('click',function(){

    const triangleFirstInputValue = getInputFieldValue('triangle-first-input');
    const triangleLastInputValue = getInputFieldValue('triangle-last-input');

    setInnerTextValue('triangle-calculation-field',triangleFirstInputValue, triangleLastInputValue);
   
})