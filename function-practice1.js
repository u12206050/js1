
/*
var person={
	speak: function(){
		console.log('hi')
	}
}
*/


var person = {
	speak : ()=> { console.log('hi') }
}

person.speak()



var person = {
	speak : (name)=> { console.log('hi ' + name) }
}

person.speak('Rohan')