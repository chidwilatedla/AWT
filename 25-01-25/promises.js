function fetchData(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); 
    });
  }
  fetchData(true)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  