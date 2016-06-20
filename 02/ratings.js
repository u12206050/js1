// List out the ratings that each age in the ages is allowed to watch.

// For example, an age of 14 would be allowed to see 'G', 'PG', and 'M' because 14 is older than 0, 9, and 12 respectively.

/* An example of the final output could be:

Age 1 is allowed to see: G
Age 23 is allowed to see: G,PG,M,MA
Age 8 is allowed to see: G
Age 12 is allowed to see: G,PG,M
Age 16 is allowed to see: G,PG,M,MA

*/

var ages = [1, 23, 8, 12, 16]
var ratings = ['G', 'PG', 'M', 'MA']
var minAgeForRating = [0, 9, 12, 15]


// for each element in ages array take argument num, where num is 
var allowed = ages.forEach(function(MOO){

	function ratingsFilter(value, i){
		return MOO >= minAgeForRating[i] 
	}

var filteredRatings = ratings.filter(ratingsFilter);

// output "text" 
	console.log("If you're aged\t", MOO,
				"\tthen you can watch ratings\t",
				filteredRatings.toString() )	
});


/*
Get age. 
Check if >= to minAgeForRating.
If yes, output true.
Repeat/iterate through minAgeForRating against ratings array.
*/

/*

var friends = ['Tony', 'Ash', 'Kelly'];

for(var i = 0; i < friends.length; i++) {
	console.log(friends[i]);
};

var friends = ['Tony', 'Ash', 'Kel'];

friends.forEach(function(name) {
	console.log(name); 
});


ages.forEach(function(age) {
	console.log(age);



});


*/


/*

console.log(ages.length);
console.log(ratings.length);

var firstAge = ages[0];
var lastAge = ages[ages.length-1];

console.log(firstAge);
console.log(lastAge);


//looping over an Array

ages.forEach(function(item,index,array) {
	console.log(item,index,array);
});

var positionOfRating = ratings.indexOf("PG");

console.log(positionOfRating);

*/