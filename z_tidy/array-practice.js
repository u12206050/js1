/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
var q1 = ["image1.png", "image2.png", "image3.png"];
// array with string elements needs quotes
console.log("Question 1: " + q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var q2 = q1[0];
console.log("Question 2: " + q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var q3 = q1.length;
console.log("Question 3: " + q3);

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

// Your code here
//changing the q1 array 
// var q4 = q1.pop();
// console.log("Question 4: " + q4);

// var q4a = q1[2];
// console.log(q4a);
console.log(q1);

var q4b = q1[q1.length-1];
console.log(q4b);





// var q4a = q1.length;
// // length will give number of elements. Last number of array is one number less than the total number of elements
// console.log("Question 4a: " + q4a);



// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
//  for (initialization; condition; increment) 
//  {            
//     // statements
//  }

var q5numbers = [1, 2, 3, 4];
var newNumbers = [];

//var newNumbers = for(i = 0; i <= 4; i++)

/*
for(var i=0; i < q5numbers.length; i++)
{
// add one to each number in array = numbers
// push it to new array = newNumbers
	q5numbers[i]++
};

console.log(q5numbers);

*/
// console.log(newNumbers);



//create new array example 

var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i=0; i < numbers.length; i++) 
// initialize loop @ element 0; continue whilst condition is count is less than length of array; increment by one

{
	// first: want to work with each element in the numbers array, so grab each current using [i]
	// 
	// var number = numbers[0] not dynamic so use numbers[i]
	// each of the elements in the numbers array >> numbers[i]
	// make each of them a new variable

	var number = numbers[i]
	
	// increment the value of each new variable number

	number++
	
	// now you have every element from numbers array, with one added to each..
	// push each of them to a new numbers array 
	
	newNumbers.push(number)
};

// console log the new array & each element should be one integer higher
// console log the origina numbers array to check we haven't mutated it
console.log(newNumbers);
console.log(numbers);



/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

// lay out the array
var numbers = [1, 2, 3, 4];
var sum;
var average;
// access each of the elements in the array 
// assign them variable
// sum them
// find number of elements in the arry
// divide no. elements by sum (average)
// store it

for(var i=0; i < numbers.length; i++)
{

	// for every element in numbers array (RIGHT)
	// break it out & assign to a variable called number (LEFT)
	var number = numbers[i];

	// starting with 1st element
	// assign it to a variable sum
	// sum = number
	// then with 2nd element
	// add it to existing variable sum
	// sum = sum + number

	sum = sum + number;

	// sum += number;

};

console.log('rohan: ' + numbers);
console.log('rohan sum: ' + sum);
console.log('rohan average: ' + sum/numbers.length);















var numbers = [1, 2, 3, 4];
var sum = 0;

for(var i=0; i < numbers.length; i++)
{
	// var number = numbers[i];
	// sum += number;
	sum += numbers[i];

};

console.log('sum: ', sum)
console.log('average: ', sum/numbers.length);


