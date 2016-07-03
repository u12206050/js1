// Combine your knowledge of loops and conditionals to incrementally solve the fizzbuzz challenge.

// - In a loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.

// create numbers 1-100
// initialize a counter variable... var number=1 (because 0 starts at zero, and we want to start at 1)

for(var number=1; number <= 100; number++ )
{
	console.log(number);
};


// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.

for(var number=1; number <= 100; number++)
{
	// divide number by 3. If nothing left over, console.log fizz
	// use modulus

	if(number % 3 === 0){
		console.log("fizz");
	}
	else {
		console.log(number);
	}

}


// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.

for(var number=1; number <= 100; number++)
{
	if(number % 3 === 0){
		console.log("fizz");
	} 
	else if(number % 5 ===0){
		console.log("buzz");
	}
	else {
		console.log(number);
	}


}


// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.

for(var number=1; number <= 100; number++)
{
	if(number % 3 === 0 && number % 5 === 0){
		console.log("fizzbuzz");
	}
	else if(number % 3 === 0){
		console.log("fizz");
	}
	else if(number % 5 === 0){
		console.log("buzz");
	}
	else{
		console.log(number);
	}
}