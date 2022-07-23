// calc will require order of operations
/* maybe i can find the symbols and then get the numbers to the left
   and right of the symbols as parameter to function and then 
   replace the 3 values including the symbol */

/* add and subtract will take in a variable length in case user 
   has many numbers
   this can be done by storing the parameter values before sending to
   function */
function add(...values) {
  const sum = values.reduce((total, value) => total += value,  0);
  return sum;
}


function subtract(...values) {
  const diff = values.reduce((diff, value) => diff -= value);
  return diff;
  }


function multiply(...values) {
  const multi = values.reduce((product, value) => product *= value);
  return multi;
}

function divide(...values) {
  const div = values.reduce((division, value) => division /= value);
  return div;
}

function operate(symbol, number1, number2) {
    if (symbol === '*') {
        return multiply(Number(number1), Number(number2));
    } else if (symbol === '/') {
        return divide(Number(number1), Number(number2));
    } else if (symbol === '+') {
        return math(Number(number1), Number(number2));
    } else if (symbol === '-') {
        return subtract(Number(number1), Number(number2));
    }
}

const numbers = document.querySelector('.numbers');

for (let x=1; x<10; x++) {
  const number = document.createElement('div');
  const para = document.createElement('p');
  number.classList.add('number');
  number.classList.add(x);
  para.innerText = x;
  number.appendChild(para);
  numbers.appendChild(number);
}



function screen(e){
  console.log(e);
}


const nums = document.querySelectorAll('.number');
nums.forEach(num => num.addEventListener('click', screen));
