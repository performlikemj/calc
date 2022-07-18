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

