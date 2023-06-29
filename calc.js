//Declare and reference the buttons' classes so that you can add functionality to them
const baseNumber = document.querySelector(".theNumber");
const incrementButton =  document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");

let counterNumber = 0;

baseNumber.innerText =  counterNumber;
incrementButton.addEventListener("click", function(){
    counterNumber ++;
    baseNumber.innerText = counterNumber;

});

decrementButton.addEventListener("click", function(){
    if(counterNumber > 0){
       counterNumber --;
    baseNumber.innerText = counterNumber;  
    }  
})