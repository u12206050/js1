(function(){
 var list = 0;

 function buttonClicked(event) {
   event.preventDefault();
   var val = document.getElementById('new-thing').value;
   if(val !== ''){
     addToList(document.querySelector('#my-list'), val, list++);
   }  
 }

 function addToList(list, text, id) {
   var li = document.createElement('li');
   li.style.backgroundColor = 'green';
   var a = document.createElement('a');
   li.setAttribute('class','list-thing');
   li.setAttribute('id', 'list-thing-'+id);    
   li.addEventListener('click', archiveClick);
   li.innerHTML = text;
   list.appendChild(li);
 }

 function archiveClick(event){
   event.preventDefault();
   var parent = event.target.parentNode;
   parent.removeChild(event.target);
   addToList(document.querySelector('#archive-list'), event.target.innerHTML, list++);
 }

 var newThingButton = document.getElementById('new-thing-button');
 newThingButton.addEventListener('click', buttonClicked);

})();