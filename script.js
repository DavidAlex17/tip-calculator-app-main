/// MAIN OBJECT * 
let calculator = {
  bill: 0,
  tips: 0,
  People: 0,
  
  results: function() {
    // cumputation
    let tipTotal = this.bill * this.tips;
    let total = parseFloat(tipTotal) + parseFloat(this.bill);
    // sum
    tipAmount.innerHTML = '$' + (tipTotal / this.People).toFixed(2);
    totalTip.innerHTML = '$' + (total / this.People).toFixed(2);
  }
}

/// VARIABLES
let billAmount = document.getElementById('bill-amount'); // calculator variables
let tipAmount = document.getElementById('tip-amount');
let totalTip = document.getElementById('total-amount');
let buttons = document.querySelectorAll('[data-percentage]');
let customAmount = document.getElementById('custom-amount'); // function variables
let numberOfPeople = document.getElementById('people-amount');

/// EVENT LISTENERS
customAmount.addEventListener('change', () => getCustomFunction());
numberOfPeople.addEventListener('change', () => getSumFunction()); 
reset.addEventListener('click', () => resetFunction()); 
// for loop for each button with event listener calling the sum function
buttons.forEach(button => {
  button.addEventListener('click', () => {
    getSumFunction(button.innerText); 
  });
});

/// SUM FUNCTION
const getSumFunction = (tipOrCustom) => {
  calculator.bill = billAmount.value; 
  calculator.tips = parseFloat(tipOrCustom) / 100;
  calculator.People = numberOfPeople.value;
  calculator.results();
}

/// CUSTOM INPUT FUNCTION
const getCustomFunction = () => {
  getSumFunction(customAmount.value);
};

///  RESET FUNCTION *
const resetFunction = () => {
  billAmount.value = null;
  customAmount.value = 'custom';
  numberOfPeople.value = null;
  tipAmount.innerHTML = '$' + '0.00';
  totalTip.innerHTML = '$' + '0.00';
  calculator.bill = 0;
};


// let reset = document.getElementById('reset');
// let zero = document.getElementById('zero');

// guests.classList.remove('number-people-active');
// zero.classList.remove('no-zero-active');