//Arrays Problem 3
/*
Define a function that takes in an array of numbers/integers and returns 
the sorted version of that array, greatest to least. 
(Note: do NOT use the "reverse" method.)

Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

Hint: To solve this, look up the JavaScript array sort method, 
and pay close attention to how it uses its return 
values of 1, 0, -1 to sort items
*/

const myArray = [-3,8,7,6,5,-4,3,2,1];
const secondTest = [11,13,5,2,7,19,21,-5];

//let newArray = secondTest.sort(function(a, b){return b-a});

//console.log(newArray);

myFunction = array => {
	
	return (array.sort(function(a, b){b-a}));
}
console.log(myFunction(secondTest));