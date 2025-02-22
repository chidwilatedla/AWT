let myPromise = new Promise((resolve, reject) => {
    let success = true; 
    setTimeout(() => {
        if (success) {
            resolve("First task done");  
        } else {
            reject("First task failed"); 
        }
    }, 1000);
});


myPromise
    .then(result => {
        console.log(result);  
        return "Second task started";  
    })
    .then(result => {
        console.log(result);  
        return "Third task started";  
    })
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.log("Error:", error);  
        
    });
