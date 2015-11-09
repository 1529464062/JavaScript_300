window.onload=function(){
	document.getElementById("submit").addEventListener("click",submitForm);
	pageHelp.Init();
}
function submitForm(){
	var doing=document.getElementById("doing");
	doing.style.display="block";
	self.location.reload();
	//location.href="http://www.baidu.com";
}
var pageHelp={
	Init:function(){
		alert("页面加载成功");
	}
}