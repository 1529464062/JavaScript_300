function closeWin() {
	//注:mozilla firefox 浏览器可能由于本身的设置，关闭脚本不生效
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