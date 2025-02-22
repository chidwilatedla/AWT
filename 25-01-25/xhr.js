// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

// Set up what to do when the response is loaded
xhr.onload = function() {
  if (xhr.status === 200) {  // Success - response code is 200
    const response = JSON.parse(xhr.responseText);  // Parse the JSON response
    console.log("Data fetched successfully:");
    console.log(response);  // Log the response object
  } else {
    console.log("Error: " + xhr.status);  // Handle errors if status is not 200
  }
};

// Set up what to do in case of an error (e.g., network issue)
xhr.onerror = function() {
  console.log("Request failed due to network error.");
};

// Send the request
xhr.send();
