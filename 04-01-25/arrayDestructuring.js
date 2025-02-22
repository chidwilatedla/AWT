let colors = ['Red', 'Green', 'Blue', 'Yellow'];

// Destructuring the array into variables
let [firstColor, secondColor, thirdColor, fourthColor] = colors;
console.log('Basic Destructuring');
console.log(firstColor);  
console.log(secondColor); 
console.log(thirdColor); 
console.log(fourthColor); 
console.log('');

// Using Rest Syntax to Get the Remainder of the Array
let [primaryColor, ...otherColors] = colors;
console.log('Rest Syntax');
console.log(primaryColor);  
console.log(otherColors); 
console.log('');

// Skipping Elements in Destructuring
let [first, , third] = colors;
console.log('Skipping Elements');
console.log(first);  
console.log(third); 
console.log('');

// Assigning Default Values
let fruits = ['Apple', 'Banana'];

// Destructuring with default value for the third element
let [fruit1, fruit2, fruit3 = 'Mango'] = fruits;
console.log(' Default Values');
console.log(fruit1);  
console.log(fruit2);  
console.log(fruit3); 
console.log('');

// Nested Array Destructuring
let nestedArray = [10, [20, 30], 40];

// Destructuring the nested array
let [x, [y, z], w] = nestedArray;
console.log(' Nested Array Destructuring');
console.log(x);  
console.log(y);  
console.log(z);  
console.log(w);  
console.log('');

// Destructuring with Swap Technique
let p = 5, q = 10;
console.log('Swap Technique Before Swap');
console.log(`p: ${p}, q: ${q}`);

// Swapping variables using destructuring
[p, q] = [q, p];
console.log(' Swap Technique After Swap');
console.log(`p: ${p}, q: ${q}`);  
console.log('');

// Combining Multiple Arrays Using Destructuring
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Destructuring to combine arrays
let combined = [...array1, ...array2];
console.log(' Combining Arrays');
console.log(combined);  