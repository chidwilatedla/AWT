const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://openweathermap.org/api/hourly-forecast','async');
    xhr.onload=function(){
        if(xhr.status>=200&& xhr.status<300)
            res=JSON.parse(xhr.responseText)
        console.log(res)
    }
xhr.send();


// const apiUrl = 'https://openweathermap.org/api/hourly-forecast/main'; 
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response failed');
//     }
//     return response.json(); 
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     console.error('failed fetching', error);
//   });
