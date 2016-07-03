
setTimeout(function() {
	// After 300ms has elapsed, print out 'TIMED OUT!'

	console.log("TIMED OUT!");
},300);

setTimeout(() => {
	console.log("Second one")
},1000);