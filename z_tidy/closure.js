function addToQueue(names, queueLength) {
    var positions = []

    for (var i = 0; i < names.length; i++) {
        positions[i] = function() {
            return queueLength + i + 1
        }
    }

    return positions
}

var people = ['Ash', 'Kelly']
var queuePositions = addToQueue(people, 10)

console.log();
console.log(queuePositions[0]()); // 13?! Should be 11
console.log(queuePositions[1]()); // 13 As well!


// when function addToQueue called
// passes arguments people, 10 into function
// addToQueue(['Ash', Kelly'], 10)
// defines positions as an array
// loops from 0 through names array
// while i is less than array length
// adding one to i each time
// function action:
// for the elements in positions array
// return queueLength (10) 
// plus current positons in array plus 1
// 



//get talk through
// walk through