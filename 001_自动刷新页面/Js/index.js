//刷新网页的函数
function fresh(){
	window.location.reload();//调用location的reload函数，完成刷新
}
setTimeout('fresh()',10000);//定时10000毫秒执行一次fresh()函数