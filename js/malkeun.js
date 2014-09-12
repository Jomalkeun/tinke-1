$(document).ready(function(){
	brain();
});

function brain(){
	var current = 0;
	var brain = $(".brain .inner");

	setInterval(function(){

		current ++;

		if (current == 13) current = 0;
		var next = brain.eq(current);
		var height = 40 * current;
		var move = "-" + height + "px"
		brain.css("top", move)
			.stop()
			.animate({top:move}, {duration:0});
	}, 90);
}











