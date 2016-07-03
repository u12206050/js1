/**
 * Execute `arrived` 500ms after executing `commuting`
 *
 * Expected output:
 *
 * > On my way.
 * > I made it!
 */

function commuting() {
  console.log('On my way.')
}

function arrived() {
  console.log('I made it!')
}

// Use `arrived` here

commuting();
setTimeout(arrived, 1000);


/*
setTimeout(
	function() {
		arrived()
	},1000);

commuting();

/*
setTimeout(
	function(){
		arrived()
	}, 1000)

commuting();
*/