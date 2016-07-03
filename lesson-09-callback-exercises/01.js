/**
 * Execute the `goSailing` function in such a way that the output on the console
 * reads:
 *
 * > We're sailing!
 * > We're tired now
 */

// CHECK:
//goSailing is function. How many parameters does it accept? What form is the parameter?
//when execute goSailing() we're passing a parameter. That parameter IS a function.
// so equivalent is 
// var 


function goSailing(done) {		//goSailing takes in one parameter, done, done is a function - the brackets () indicate that function is being invoked
  console.log("We're sailing!")
  done("We're tired now")
}

// Pass an argument here which is the callback
goSailing(
	function (something){
		console.log(something)
	}
)



function goEat(a) {
  console.log("We're eating!")
  a("We're full now")	
}

goEat(
	function(b){
		console.log(b)
	}
)

