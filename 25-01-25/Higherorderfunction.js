function greetUser(greetingFunction) {
    const name = "Alice";
    console.log(greetingFunction(name));
}

// A simple function to be passed as an argument
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Calling the higher-order function with a simple function as an argument
greetUser(sayHello);