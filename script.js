//Arrays Problem 3

const myArray = [-3,8,7,6,5,-4,3,2,1];
const secondTest = [11,13,5,2,7,19,21,-5];


myFunction = array => {
	let experiment = array.sort((b, a) => {
//adds comparator to help define how objects are ordered in the array
	if (a < b){return -1};
	if (a > b){return 1};
	return 0
/*conditions that outline how to order each 
	object when they are compared to each other*/

  });
	return experiment
//returns the variable that holds the sort method
}

console.log(myFunction(myArray));