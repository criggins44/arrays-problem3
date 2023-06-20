//Arrays Problem 3

const myArray = [-3,8,7,6,5,-4,3,2,1];
const secondTest = [11,13,5,2,7,19,21,-5];

let experiment = myArray.sort((b, a) => {
	if (a < b){return -1};
	if (a > b){return 1};
	return 0
});

console.log(experiment);

myFunction = array => {
	let experiment = array.sort((b, a) => {
	if (a < b){return -1};
	if (a > b){return 1};
	return 0
  });
}