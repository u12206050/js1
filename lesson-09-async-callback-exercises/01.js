/**
 * Execute the function `runningLate` 1000ms in the future
 *
 * Hint: mdn.io/setTimeout
 */

function runningLate() {
  console.log('Phew, I made it!')
}

//Execute a function by calling it: runningLate();
//wrap it in setTimeout(code, time)
//
setTimeout(function(){
	runningLate()
},2000)

/* OR 

setTimeout( () => {
	runningLate()
},1000)

*/


function testFunction(){
	console.log("Test timer works!");
};

setTimeout(testFunction, 2000);


var anotherTimeTest = () => {
	console.log("Thirs one works too");
};

setTimeout(anotherTimeTest, 3000);