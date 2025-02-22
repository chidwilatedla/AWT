// Create a symbol
const symbol1 = Symbol('description');
const symbol2 = Symbol('description');

console.log(symbol1 === symbol2);  // Output: false (symbols are always unique)

// Use symbol as a property key in an object
let obj = {};
obj[symbol1] = 'value';

console.log(obj[symbol1]);  // Output: 'value'
