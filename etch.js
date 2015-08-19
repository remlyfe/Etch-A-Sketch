$(document).ready(function(){ 
	//Create the default grid using jquery
		
		//Do / While loop gets grid size from user with data error checking
		do {
				var boxesPerRow = prompt("Enter a number between 1-64", 64);
			}
			while (boxesPerRow < 1 || boxesPerRow > 64 || isNaN(boxesPerRow));
	

	//Declare variables and functions

	var containerWidth = 800; //sets the width of the 'screen' should match the css setting
	var boxHeightWidth = containerWidth / boxesPerRow; //divides the container by the amount of boxes chosen to create the squares' height and width values
	
	var classic = function(){
		$(".square").mouseenter(function(){
				$(this).css({"background-color": "black"}); //'this' allows each individual square div's background to change as the mouse enters the div
			});
	};

	var opacityDiv = function(){
		$(".square").mouseenter(function(){

			var currentOpacity = $(this).css("opacity");

			if (currentOpacity > 0){
				$(this).css("opacity", currentOpacity - 0.1);
			}
		});
	};

	var randomColorDiv = function() {
    		$(".square").mouseenter(function(){
			$(this).css({"border-radius" : "50px" , "background-color" : "#" + Math.floor(Math.random() * 16777215).toString(16)}); //http://www.paulirish.com/2009/random-hex-color-code-snippets/
		});
	};

	var clearGrid = function(){
		$("#container > .square").remove();
		boxesPerRow;
	}

	var createGrid = function(){
		for (var i = 1; i <= Math.pow(boxesPerRow, 2); i++){
			$("#container").append("<div class='square'></div>"); //squares the boxes per row value then adds that amount of divs to the container
	}
			$(".square").height(boxHeightWidth).width(boxHeightWidth);
			classic();
		};

	/*var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letters = alphabet.split("");

	var alpha = function(){
		$(".square").mouseenter(function(){
			for (i = 0; i < 26; i++){
    			$(this).append(letters[i]);
			}
		});
	};
	*/
			createGrid();

//Set up button functionality

$("#colors").click(function(){
		clearGrid();
		createGrid();
		randomColorDiv();

	});

$("#classic").click(function(){
	clearGrid();
	createGrid();
});

$("#clear").click(function(){
	document.location.reload();
	});

$("#shades").click(function(){
	clearGrid();
	createGrid();
	opacityDiv();
	$('#container').css({"background-color" : "white"});

	});	
});

