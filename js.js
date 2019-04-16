spawn();

document.onkeydown = function checkKeycode(event) {
	var keycode;
	if(!event) var event = window.event;
	if (event.keyCode) keycode = event.keyCode; // для IE
	else if(event.which) keycode = event.which; // для всех браузеров
	if (event.which == 70) {
        $(".divs").mouseover(function () {
			$(this).css('background','blue');
		});
    }
}

function clickk() {
	$(".divs").remove();
	spawn();
	alert("Очищено!");
}

function spawn() {
	for(i = 0; i < 2400; i++) {
		var div = document.createElement("div");
		div.className = "divs";
		body.appendChild(div);
	}
}
