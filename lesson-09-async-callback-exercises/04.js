/**
 * Execute `goSurfing` after `warmUp` has completed.
 *
 * The expected output:
 *
 * > Big waves today
 * > I'm ready
 * > Riding the waves!
 */

function goSurfing(done) {
  setTimeout(() => {
    done('Riding the waves!')
  }, Math.random() * 300)
}

function warmUp(done) {
  setTimeout(() => {
    done("I'm ready")
  }, Math.random() * 300)
}

//calling function warmUp, passing it a function or callback
warmUp((warmUpMessage) => {  
  //function prints out argument
  console.log(warmUpMessage);

  // Your solution here
goSurfing(
  function(goSurfingParameter) {
    console.log(goSurfingParameter);

})
//Are we saying that the argument is a function
//execute goSurfing
//then pass in function as parameter, and
//therefore we 'define' done as a function 
//then
//pass whole function in as done
//function(goSurfingParameter) { console.log(goSurfingParameter); }
// which now means done effectively becomes function...
// and goSurfingParameter is replaced by the actual parameter? 'Riding the waves!'?


});

console.log('Big waves today')
