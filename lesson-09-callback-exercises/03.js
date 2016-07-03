/**
 * Change the `shop` function to accept a callback parameter, then instead of
 * returning a value, execute that callback within `shop` so you see the output
 * on the command line:
 *
 * > Retail Therapy
 * > I bought a hat!
 */

/* Modify the function
function shop() {
  console.log('Retail Therapy')
  return 'hat!'
}

shop((purchased) => {
  console.log('I bought a', purchased)
})
*/

function shop(callback) {
  console.log('Retail Therapy')
  return 'hat!'
}

shop((purchased) => {
  console.log('I bought a', purchased)
})