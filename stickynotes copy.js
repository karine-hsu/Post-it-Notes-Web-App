$(document).ready(function(){

	form_init();
	var stickiesArray = localStorage.getItem["stickiesArray"];
	clearSticky();

});


/* get form data upon clicking Add Note button */
function form_init() {

	var button = document.getElementById("add_sticky");
 
        button.onclick = makeSticky; 

	$("form#controls_form").submit(function(){

		/*console.log($("input#note").val());*/
		var test = document.getElementById('note');
	
		localStorage.setItem('test',test.value)

		//localStorage.setItem('key',document.getElementById('note').value)
		var retrievedTest = localStorage.getItem('test');

		//console.log(retrievedTest);
		alert(retrievedTest);
		
	
		///validate inputs
		if (test.length == 0) {
			alert("Error: You must write a note before a sticky note can be created.");
			return false;
		}
		
		/*for (var i=1; i < localStorage.length; i++){
 
      		var key = localStorage.key(i);
      		
 
      		if (key.substring(0, 6) === 'sticky'){ 
 
            var value = localStorage.getItem(key);
            
            addStickiesToPage(value); 
 
      	}*/

	var stickiesArray = getStickiesArray(); 
 
    for (var i=0; i < stickiesArray.length; i++){
       
        var key = stickiesArray[i];
        var value = stickiesArray[key];
        addStickyToPage(value);
     }
      	
      
      	//clear forms after submitting 
		$("input#note").val("");
		$("input#note").select();
		//make form not submit 
		return false;

	});
}

 
//defines getStickiesArray function
 
function getStickiesArray(){
     var stickiesArray = localStorage.getItem["stickiesArray"];
 
     //check if it exists
     if (!stickiesArray){
        //create one below if not
        stickiesArray = []
 
        //now store the array
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
     }
     else{
        stickiesArray = JSON.parse(stickiesArray);
     }
     return stickiesArray;
}

//define makeSticky function
function makeSticky(){
     var stickiesArray = getStickiesArray();
     var currentDate = new Date();
     var key = "sticky_" + currentDate.getTime();
     var value = document.getElementById("note").value;
 
     localStorage.setItem(key, value);
     stickiesArray.push(key);
     localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
 
     addStickiesToPage(key, value);
}
// makes a sticky note in localStorage

/*function makeSticky(){
 
     var value = document.getElementById("note").value;
 
     var key = "sticky_" + localStorage.length;
 
     localStorage.setItem(key, value);
 
     addStickiesToPage(value);
}*/


function addStickiesToPage(stickyKey, value){
 
      var stickies = document.getElementById("stickies");
 
      var sticky = document.createElement("li");
 
      var span = document.createElement("span");
 
      span.setAttribute("class", "sticky");
 
      span.innerHTML = value;

      // check if key has been made into a sticky already 
      //
       // stickies.id = 'stickiesID';
        //sticky.id = 'stickyID';
      	sticky.appendChild(span);
      	sticky.id = stickyKey;
      	stickies.appendChild(sticky);
     	//have post-it note change color upon click
		$('#'+stickyKey).click(function() {
			function get_random_color() {
    		var letters = '0123456789ABCDEF'.split('');
    		var color = '#';
    		for (var i = 0; i < 6; i++ ) {
        		color += letters[Math.round(Math.random() * 15)];
    		}
    	return color;
}

  			//$(this).css('backgroundColor', random_color());
  			$(this).css({'backgroundColor': get_random_color()});
  			//changeColor();
  			//console.log(stickyKey);
  			//var property=document.getElementById("stickies");
	
			//property.style.backgroundColor='green';
  		});
      
 
}
/*
		$("#stickyID").click(function() {
  	
  		changeColor();
  		console.log(color);
  		});
*/
function clearStorage(){
	localStorage.clear();
}

function clearSticky(){
	var clearButton = document.getElementById("clear_sticky");
	clearButton.onclick = clearStorage;

}

function randomFromTo(){
	Math.floor((Math.random()*5)+1);
}
/*function changeColor(){

	var colors = new Array();
	colors[0] = 'green';
	colors[1] = 'blue';
	colors[2] = 'yellow';
	colors[3] = 'red';
	colors[4] = 'purple';
	colors[5] = 'orange';
	var color = colors[randomFromTo(0,(colors.length - 1))];

	var stickies = document.getElementById("stickies");
	sticky.id = stickyKey;
	var property=document.getElementById("stickiesID");
	
	
	property.style.backgroundColor=color;
	

	}*/


