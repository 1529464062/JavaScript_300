//锟斤拷页锟斤拷前锟斤拷
function goForward(){	
	window.history.forward();//锟斤拷之前锟斤拷锟斤拷页
}
//锟斤拷页锟斤拷锟斤拷锟?
function goBack(){	
	window.history.back();//锟斤拷之锟斤拷锟斤拷锟揭?
}
document.onmousedown=function(e){
	e=e||window.event;
	var e_id=e.target.id;	
	var e_class=e.target.className;
	switch(e_id){
		case "forward":goForward();break;
		case "back":goBack();break;
	}
}
