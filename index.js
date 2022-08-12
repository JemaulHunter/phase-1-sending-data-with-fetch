/*write a function, submitData, that takes two strings as arguments, 
one representing a user's name and the other representing a user's email.
***Note: The tests in this lab need access to the fetch() request inside 
submitData. In order to give them access, write your solution so that 
submitData returns the fetch(). This will not change the behavior of your 
fetch().
*/

/*
In submitData, write a valid POST request to http://localhost:3000/users 
using fetch(). This request should include:

The destination URL
Headers for 'Content-Type' and 'Accept', both set to 'application/json'
A body with the name and email passed in as arguments to submitData. 

These should be assigned to name and email keys within an object. This 
object should then be stringified.
*/

/*
Use a then() call to access the Response object and use its built-in json() 
method to parse the contents of the body property. Use a second then() to 
access this newly converted object. From this object, find the new id and 
append this value to the DOM.
*/

//For this final test, after the two then() calls on your fetch() request, 
//add a catch().

//you will need to return the fetch() chain from our submitData function 
//to ensure that the tests run correctly.

const submitData = {
  name: "Sam",
  email: "sam@sam.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(submitData),
};

fetch("http://localhost:3000/users", configurationObject)
  .then(function submitData(response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });