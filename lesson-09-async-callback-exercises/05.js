/**
 * Execute `learnJS` first and output the result passed to your callback. Once
 * it is completed, execute `buildAWebsite`, outputting its result also.
 *
 * Expected output:
 *
 * > I signed up for JS1
 * > I know JS!
 * > I am a pro :D
 */

function learnJS(done) {
  setTimeout(() => {
    done('I know JS!')
  }, Math.random() * 1000)
}

function buildAWebsite(done) {
  setTimeout(() => {
    done('I am a pro :D')
  }, Math.random() * 1000)
}

// Your solution here
//step 1 call learnJS
learnJS(
  //step 2 make done become a function
  function(makeDoneBecomeAFunction) {
    console.log(makeDoneBecomeAFunction);
  buildAWebsite((makeDoneBecomeAFunction2) => {
      console.log(makeDoneBecomeAFunction2)
    })
  }

);

//step 3 call buildAWebsite();
//error 'done is not a function'
//make done become a function
/* 
buildAWebsite((doneFunction2) => {
  console.log(doneFunction2)
});
*/

// but execution is random
// put buildAWebsite inside learnJS

console.log('I signed up for JS1');
