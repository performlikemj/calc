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
        return add(Number(number1), Number(number2));
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

let placeholder = '';
let symbol = '';
let number1 = '';
let number2 = '';

function calculation() {
  if (Number(this.innerText)) {
    placeholder += this.innerText; 
  } else if(this.innerText === '-' || this.innerText === '+' || this.innerText === '*' || this.innerText === '/'){
    number1 = placeholder;
    placeholder = '';
    symbol = this.innerText;
  } else if (this.innerText === 'Equal') {
    number2 = placeholder;
    placeholder = operate(symbol, number1, number2);
  }
  
  return screen();
}

function screen(){
  const screen = document.querySelector('.screen');
  // store operation in variables as i go. if the second operator is not +,-,*,/, then clear and
  // new number
  screen.innerText = placeholder;
}


const nums = document.querySelectorAll('.number p');
const ops = document.querySelectorAll('.second-row p')
nums.forEach(num => num.addEventListener('click', calculation));
ops.forEach(op => op.addEventListener('click', calculation))
