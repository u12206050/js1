/**
 * Your forecast.io key is available as the global variable:

process.env.FORECAST_KEY

 *
 */

/**
 * We include this line to ensure `fetch()` is ready to use in node
 */
require('isomorphic-fetch');


// Your code here...

/*
fetch('http://maps.googleapis.com/maps/api/geocode/json?address=WAVERTON')
	.then((reply) => {
		return reply.json();
		console.log(reply);
});
	*/
fetch('http://maps.googleapis.com/maps/api/geocode/json?address=SEARCH')
	.then(function(reply) {
		return reply.json();
		console.log(reply);
	});

