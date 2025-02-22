let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruits[0]); 
console.log(fruits[2]); 
console.log(fruits.length); 
fruits.push('grapes');
console.log(fruits);
delete fruits [1];
console.log(fruits);
[a,...b]=fruits;

let fruits1 = ['pineapple','kiwi','dragonfruit'];
let fruits2 = ['peach','guava','watermelon'];
let mergedArray = [...fruits1, ...fruits2];
console.log(mergedArray);  
