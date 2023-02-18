//triangle calculation
let serial = 0;
function displayData(serial, areaName, areaCalculation) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${areaName}</td>
      <td>${areaCalculation}</td>
       
      <td>cm<sup>2</sup></td>
      <td>
      <button class="px-6 py-1 bg-blue-500 rounded-lg text-white font-medium w-auto">Convert to m<sup>2</sup></button>
      </td>
      
    `;
    container.appendChild(tr);
  }

document.getElementById('btn-triangle-calculate').addEventListener('click',function(){

    const triangleFirstInputValue = getInputFieldValue('triangle-first-input');
    const triangleLastInputValue = getInputFieldValue('triangle-last-input');

    console.log(triangleFirstInputValue);
    console.log(triangleLastInputValue);

    const area = areaCalculationWithThreeNumbers(triangleFirstInputValue, triangleLastInputValue);
    console.log(area);

    serial = serial + 1;
    displayData(serial,'Triangle',area);

})
//rectangle calculation
document.getElementById('btn-rectangle-calculate').addEventListener('click',function(){
    const rectangleFirstInputValue = getInputFieldValue('rectangle-first-input');
    const rectangleLastInputValue = getInputFieldValue('rectangle-last-input');

    const area = areaCalculationWithTwoNumbers(rectangleFirstInputValue,rectangleLastInputValue);

    serial = serial+1;
    displayData(serial,'Rectangle',area);
})
//Parallelogram calculation
document.getElementById('btn-parallelogram-calculate').addEventListener('click',function(){
    const parallelogramFirstInputValue = getInputFieldValue('parallelogram-first-input');
    const parallelogramLastInputValue = getInputFieldValue('parallelogram-last-input');
    const area = areaCalculationWithTwoNumbers(parallelogramFirstInputValue,parallelogramLastInputValue);
    serial = serial+1;
    displayData(serial,'Parallelogram',area);

})
//rhombus calculation
document.getElementById('btn-rhombus-calculate').addEventListener('click',function(){
    const rhombusFirstInputValue = getInputFieldValue('rhombus-first-input');
    const rhombusLastInputValue = getInputFieldValue('rhombus-last-input');
    const area = areaCalculationWithThreeNumbers(rhombusFirstInputValue,rhombusLastInputValue)
    serial = serial+1;
    displayData(serial,'Rhombus',area);

})
//pentagon calculation 
document.getElementById('btn-pentagon-calculate').addEventListener('click',function(){
    const pentagonFirstInputValue = getInputFieldValue('pentagon-first-input');
    const pentagonLastInputValue = getInputFieldValue('pentagon-last-input');
    const area = areaCalculationWithTwoNumbers(pentagonFirstInputValue,pentagonLastInputValue);
    serial = serial+1;
    displayData(serial,'Pentagon',area);
})


//ellipse calculation
document.getElementById('btn-ellipse-calculate').addEventListener('click',function(){
    const pentagonFirstInputValue = getInputFieldValue('ellipse-first-input');
    const pentagonLastInputValue = getInputFieldValue('ellipse-last-input');
    const area = calculateEllipseArea(pentagonFirstInputValue,pentagonLastInputValue)
    serial = serial+1;
    displayData(serial,'Pentagon',area);

})

// color change
const colorChange = document.getElementsByClassName('color-change');

for(const color of colorChange){
    function randomColor() {
        return Math.floor(Math.random() * 255);
    }
    color.addEventListener('mouseenter',function(){
        color.style.backgroundColor = 'rgba(' 
        + randomColor() + ',' + randomColor() 
        + ',' + randomColor() + '\)'
    })
    
}



