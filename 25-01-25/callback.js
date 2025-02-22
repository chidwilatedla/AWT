function fetchData(url, callback) {
  setTimeout(() => {
    console.log(`Fetched data from ${url}`);
    callback();
  }, 1000);
}

function processData(callback) {
  console.log("Processing data...");
  callback();
}

function displayData() {
  console.log("Displaying data.");
}

// Usage of the callback
fetchData("https://example.com", function() {
  processData(function() {
    displayData();
  })});