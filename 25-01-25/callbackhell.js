function fetchData(url, callback) {
  setTimeout(() => {
    console.log(`Fetched data from ${url}`);
    callback();
  }, 1000);
}

function processData(callback) {
  setTimeout(() => {
    console.log("Processing data...");
    callback();
  }, 1000);
}

function displayData(callback) {
  setTimeout(() => {
    console.log("Displaying data.");
    callback();
  }, 1000);
}

function sendData(callback) {
  setTimeout(() => {
    console.log("Sending data to the server...");
    callback();
  }, 1000);
}

// Callback Hell (Nested callbacks)
fetchData("https://example.com", function() {
  processData(function() {
    displayData(function() {
      sendData(function() {
        console.log("All tasks completed!");
      });
    });
  });
});
