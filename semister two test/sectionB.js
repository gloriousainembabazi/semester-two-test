//Section B 

// QN 1: 
//var: Can be redeclared and has function scope.

//let: Cannot be redeclared, has block scope.

//const:Cannot be redeclared, has block scope. , but cannot be reassigned.


// QN 2 :
// JavaScript objects are collections of key-value pairs where keys are strings (or Symbols) and values can be any data type. 
// They are used to represent structured data. Arrays, on the other hand, are ordered collections of values (indexed by numbers) 
//
//  and are typically used to store lists of items.

// QN 3 :
// JavaScript uses = to check and covert the same  data type before comparing.
// ===  is used to check both the value and the data type without type coercion.


// QN 4 :
// An event in JavaScript is an action or occurrence that happens in the browser, such as a user clicking a button, 
// submitting a form, . Even allow developers to execute code in response to user interactions.
// example
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");

});

// QN 5:

// Similarities:
// - Both are array methods.

// Differences:
// forEach is used for performing side effects and does not return a new array.
// map is used to transform each element in the array and returns a new array with the transformed elements.
