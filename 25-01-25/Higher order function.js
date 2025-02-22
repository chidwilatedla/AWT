// Higher-Order Function that returns a function
function createMultiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  
  const multiplyBy2 = createMultiplier(2);
  const multiplyBy3 = createMultiplier(3);
  
  console.log(multiplyBy2(5)); // Output: 10
  console.log(multiplyBy3(5)); // Output: 15
  