function outerFunction(outerVariable) {
  // This is the outer function's local variable
  return function innerFunction(innerVariable) {
    // This is the inner function which has access to outerFunction's variables
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
  };
}

const closureExample = outerFunction("I am from the outer scope!");

closureExample("I am from the inner scope!");
