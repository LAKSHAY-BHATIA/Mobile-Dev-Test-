// question4 Let’s see we an api url www.example.com/api/get/1 
// Write a sample code to call this rest api and display the result.

let url = 'www.example.com/api/get/1';

fetch(url,{
    method:"GET"
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})
