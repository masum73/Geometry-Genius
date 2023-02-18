//triangle calculation
document.getElementById('btn-triangle-calculate').addEventListener('click',function(){

    const triangleFirstInputValue = getInputFieldValue('triangle-first-input');
    const triangleLastInputValue = getInputFieldValue('triangle-last-input');

    setInnerTextValueWithThreeNumbers('triangle-calculation-field',triangleFirstInputValue, triangleLastInputValue);
    displayCalculation('triangle');
})
//rectangle calculation
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const rectangleFirstInputValue = getInputFieldValue('rectangle-first-input');
    const rectangleLastInputValue = getInputFieldValue('rectangle-last-input');

    setInnerTextValueWithTwoNumbers('rectangle-calculation-field', rectangleFirstInputValue, rectangleLastInputValue);
    displayCalculation('rectangle');
})
//Parallelogram calculation
document.getElementById('btn-parallelogram-calculate').addEventListener('click',function(){
    const parallelogramFirstInputValue = getInputFieldValue('parallelogram-first-input');
    const parallelogramLastInputValue = getInputFieldValue('parallelogram-last-input');

    setInnerTextValueWithTwoNumbers('parallelogram-calculation-field', parallelogramFirstInputValue, parallelogramLastInputValue);
    displayCalculation('parallelogram');
})
//rhombus calculation
document.getElementById('btn-rhombus-calculate').addEventListener('click',function(){
    const rhombusFirstInputValue = getInputFieldValue('rhombus-first-input');
    const rhombusLastInputValue = getInputFieldValue('rhombus-last-input');

    setInnerTextValueWithThreeNumbers('rhombus-calculation-field', rhombusFirstInputValue, rhombusLastInputValue);
    displayCalculation('rhombus')
})
//pentagon calculation 
document.getElementById('btn-pentagon-calculate').addEventListener('click',function(){
    const pentagonFirstInputValue = getInputFieldValue('pentagon-first-input');
    const pentagonLastInputValue = getInputFieldValue('pentagon-last-input');

    setInnerTextValueWithThreeNumbers('pentagon-calculation-field', pentagonFirstInputValue, pentagonLastInputValue);
    displayCalculation('pentagon')
})


//ellipse calculation
document.getElementById('btn-ellipse-calculate').addEventListener('click',function(){
    const pentagonFirstInputValue = getInputFieldValue('ellipse-first-input');
    const pentagonLastInputValue = getInputFieldValue('ellipse-last-input');

    setEllipseValue('ellipse-calculation-field', pentagonFirstInputValue, pentagonLastInputValue);
    displayCalculation('ellipse')
})