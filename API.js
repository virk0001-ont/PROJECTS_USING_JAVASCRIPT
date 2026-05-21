//apis in javascript

//explaine apis
//API stands for Application Programming Interface. It is a set of rules and protocols
//  that allows different software applications to communicate with each other.
//  APIs define how requests and responses should be structured, 
// enabling developers to access and manipulate data or functionality 
// from external services or platforms without needing to understand the 
// underlying code. APIs can be used for various purposes, 
// such as retrieving data from a server, integrating third-party services, 
// or enabling communication between different software components.
//fetch api





//we can use website name JSONformatter
// to format and beutify the json data that we get from the api response

//examples of apis 

//requesting data from an API using the Fetch API
//rahter than using XMLHttpRequest, which is an older method for making HTTP requests in JavaScript. The Fetch API provides a more modern and flexible way to handle asynchronous requests and responses. It uses Promises, which allows for easier handling of asynchronous operations and better error handling compared to callbacks used in XMLHttpRequest. Additionally, the Fetch API has a cleaner syntax and supports features like streaming responses and request cancellation, making it a preferred choice for working with APIs in modern JavaScript development.  





























fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  
//async/await   
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData(); 


//things to cram about apis
//1. fetch api
//another easy example
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

//2. async/await
//3. XMLHttpRequest
//4. RESTful APIs
//example of RESTful API
//GET request to retrieve a list of users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  //post request to create a new user
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: '
//5. GraphQL APIs
//6. API authentication (e.g., API keys, OAuth)
//7. CORS (Cross-Origin Resource Sharing)
//8. API rate limiting
//9. API documentation and testing tools (e.g., Postman, Swagger)
//10. Error handling in APIs

