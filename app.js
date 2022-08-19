let count = 0;

let incrementEl = document.getElementById("increment-btn");

let flightEl = document.getElementById("flight");

let saveEl = document.getElementById("save-btn");

let previousEl = document.getElementById("previous");



function newNumber () {
    count += 1;
    flightEl.innerText = count;
    // count = 0;
    // console.log(flightEl);
}

function saveNumber () {
    let previousNumber = count + " - ";
    previousEl.innerText += previousNumber;
    flightEl.innerText = 0;
    count = 0;
    
}




newNumber();