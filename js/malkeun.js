$(document).ready(function(){
	brain();
});

function brain(){
	var current = 0;
	var brain = $(".brain .inner");

	setInterval(function(){
		/*
		var prev = brain.eq(current);
		prev.css("top", 0)
			.stop()
			.animate({top:'-40px'}, {duration:0});
		*/

		current ++;

		if (current == 13) current = 0;
		console.log(current);
		var next = brain.eq(current);
		var height = 40 * current;
		var move = "-" + height + "px"
		next.css("top", move)
			.stop()
			.animate({top:move}, {duration:0});
		console.log(move);
	}, 100);
}











