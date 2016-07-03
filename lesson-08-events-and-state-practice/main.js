/* DOM Manipulation: Independent Practice

To complete this exercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
TASK: listen for click button
TASK: get text input
TASK: push to DOM as new <li>  Create element // appendChild

- Only add an item if the input box is not blank.
TASK: check if text box is blank when clicked. If so, do nothing (or add message)

- Clear the input box when the user clicks the button.
TASK: on click, clear text
*/

var button = document.getElementById('new-thing-button');
button.addEventListener('click', function(buttonClick){

	buttonClick.preventDefault();

	var textInput = document.getElementById('new-thing').value;

	console.log(textInput);

	// If textInput is NOT blank, create <li> and append as child of <ui id='my-list'>

	if(textInput === ''){
		console.log('no value');
	} else {
		var newListItem = document.createElement('li');	//create new li, assign it to newListItem
		var newListItemText = document.createTextNode(textInput);	//create text based on textInput variable and assign it to newListItemText
		newListItem.appendChild(newListItemText);	// add the text to the new li
		//now add this new fully formed li with text into the DOM
		var currentList = document.getElementById('my-list');	//grab list
		currentList.appendChild(newListItem);	//add newListItem to currentList
	}

});



// var currentList = Array.from(document.querySelectorAll('li'));

//my-list.addEventListener('click',(), function(){	// could use:  () =>
 	
 	// get text from id new-thing
 	// create new li with it


// });

/*
Your code must use these features:

- Event delegation (Utilities: http://bit.ly/js1-utilities )
- Separate State from DOM
- Use a View Template

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"
*/


/*
(function() {

  var container = document.querySelector('#container')
  var state = {}

  function render(data, into) {

  }
})()
*/