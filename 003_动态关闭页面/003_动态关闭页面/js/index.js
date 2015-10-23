function closeWin() {	
	var opened = window.open('about:blank', '_self');
	opened.opener = null;
	opened.close();
}
document.onmousedown = function(e) {
	e = e || window.event;
	var e_id = e.target.id;
	var e_className = e.target.className;
	switch (e_id) {
		case "closeWin":
			closeWin();
			break;
	}
}