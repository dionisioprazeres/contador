var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
 
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById('stickman').src= 'stickman.gif';

}
function decrement(){
 
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    document.getElementById('stickman').src= 'tenor_1.gif';

}

