/**
 * Execute the `knit` function in such a way that the output on the console
 * reads:
 *
 * > I knitted you a jumper!
 */

function knit(thing, callback) {
  callback('I knitted you a ' + thing)
}

// Pass the two arguments here, the second of which is the callback
knit(
	'jumper', function (foo){
		console.log(foo)
	}
	);


