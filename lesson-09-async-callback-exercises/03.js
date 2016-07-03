/**
 * Pass a callback to `getTheWeather` to print out what the current weather is
 * like
 *
 * The expected output is:
 *
 * > What is the weather?
 * > Sunny!
 */

function getTheWeather(done) {
  setTimeout(
      function() {
        done('Sunny!')
      }, 1000)
}

// call getTheWeather function, passing it a callback function
// function should take one parameter as getTheWeather(param1)
// function will execute the setTimeOut
// and pass the parameter done
// but done only executes 1000ms after all page code executes
getTheWeather(
  function(callback) {
      // function prints out the parameter
      console.log(callback);
  }
);

console.log("What is the weather?");


// Your solution here

/* 

  var done = function(whyThis) {
	console.log(whyThis);
};

getTheWeather(done);
console.log('What is the we   ather?')

*/