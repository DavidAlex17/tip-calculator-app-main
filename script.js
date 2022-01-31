/// MAIN OBJECT
let calculator = {
  ticketPrice: 0,
  tipPercent: 0,
  numPeople: 0,
  
  results: function() {
    if (calculator.ticketPrice == 0 || calculator.tipPercent == 0) {
      alert("Ticket Amount or Tip not selected.\n Please select both Ticket and Tip amount.");
    }

    let newTicket = this.ticketPrice;
    let tip = this.ticketPrice * this.tipPercent;
    let total = parseFloat(tip) + parseFloat(newTicket);
      
    tipAmount.innerHTML = '$' + (tip / this.numPeople).toFixed(2);
    totalTip.innerHTML = '$' + (total / this.numPeople).toFixed(2);
  }
}

/// VARIABLES
// calculator variables
let billAmount = document.getElementById('bill-amount');
let tipAmount = document.getElementById('tip-amount');
let totalTip = document.getElementById('total-amount');
// percent variables
let five = document.getElementById('five');
let ten = document.getElementById('ten');
let fifteen = document.getElementById('fifteen');
let twentyFive = document.getElementById('twenty-five');
let fifty = document.getElementById('fifty');
// function variables
let custom = document.getElementById('custom-amount');
let guests = document.getElementById('people-amount');
let reset = document.getElementById('reset');
let zero = document.getElementById('zero');

/// EVENT LISTENERS
five.addEventListener('click', () => tipFunction(5));
ten.addEventListener('click', () => tipFunction(10));
fifteen.addEventListener('click', () => tipFunction(15));
twentyFive.addEventListener('click', () => tipFunction(25));
fifty.addEventListener('click', () => tipFunction(50));

custom.addEventListener('change', () => customButton()); // custom input button
guests.addEventListener('change', () => notZero()); // number of people input
reset.addEventListener('click', () => resetFunction()); // Reset input

// TICKET AND TIP FUNCTION
function tipFunction(tip) {
  let percent = tip;
  calculator.tipPercent = percent / 100;
  calculator.ticketPrice = billAmount.value;
  notZero();
}

// NUMBER OF PEOPLE FUNCTION
const notZero = () => {
  let numberPeople = guests.value;
  if (numberPeople == 0) {
    guests.classList.add('number-people-active');
    zero.classList.add('no-zero-active');
  } else {
    guests.classList.remove('number-people-active');
    zero.classList.remove('no-zero-active');
    calculator.numPeople = guests.value;
    calculator.results();
  }
}

// CUSTOM INPUT FUNCTION
const customButton = () => {
  let newCustom = custom.value;
  tipFunction(newCustom);
};

//  RESET FUNCTION
const resetFunction = () => {
  billAmount.value = null;
  custom.value = 'custom';
  guests.value = null;
  tipAmount.innerHTML = '$' + '0.00';
  totalTip.innerHTML = '$' + '0.00';
  calculator.ticketPrice = 0;
  guests.classList.remove('number-people-active');
  zero.classList.remove('no-zero-active');
};



// Tip Function
// const getTip = () => {
//   let tipCustom = Number.parseFloat(document.querySelector('#tip-custom')?.value);

//   if (!Number.isNaN(tipCustom)) {
//       return tipCustom;
//   }

//   return 0;
// }
