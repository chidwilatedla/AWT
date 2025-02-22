function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
      yield count;  // Pauses execution and returns the current value of count
      count++;
    }
  }
 
  const counter = countUpTo(5);  // Create a generator that counts up to 5
 
  // Iterating over the generator
  for (let num of counter) {
    console.log(num);  // Output: 1, 2, 3, 4, 5
  }
