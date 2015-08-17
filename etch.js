$(document).ready(function(){ 
	//Create the default grid using jquery
		do {
				var boxesPerRow = prompt("Enter a number between 1-64");
			}
			while (boxesPerRow < 1 || boxesPerRow > 64 || isNaN(boxesPerRow));
	


	var containerWidth = 800; //sets the width of the 'screen' should math the css setting
	var boxHeightWidth = Math.round(containerWidth / boxesPerRow); //divides the container by the amount of boxes chosen to create the squares' height and width values
	var classic = function(){
		$(".square").mouseenter(function(){
				$(this).css({"background-color": "black"}); //'this' allows each individual square div's background to change as the mouse enters the div
			});
	};

	var opacityChangeOnHover = function() {
    		$( ".square" ).mouseenter(function() {
        		var actualOpacity = $( this ).css( "opacity" );
        		var newOpacity = actualOpacity + 0.1;

        	$( this ).css( {"opacity" : newOpacity} );
    	});
	};

	var clearGrid = function(){
		$("#container > .square").remove();
		boxesPerRow;
		//createGrid();
	}

	var createGrid = function(){
		for (var i = 1; i <= Math.pow(boxesPerRow, 2); i++){
			$("#container").append("<div class='square'></div>"); //squares the boxes per row value then adds that amount of divs to the container
	}
			$(".square").height(boxHeightWidth).width(boxHeightWidth);
			classic();
		};

			createGrid();

$("#colors").click(function(){
		clearGrid();
		createGrid();

		$(".square").mouseenter(function(){
			$(this).css({"border-radius" : "50px" , "background-color" : "#" + Math.floor(Math.random() * 16777215).toString(16)}); //http://www.paulirish.com/2009/random-hex-color-code-snippets/
		});
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
		
		

	});
		
});
