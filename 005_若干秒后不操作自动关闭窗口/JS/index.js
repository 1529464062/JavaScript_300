//定义一个是否关闭的全局变量
window.onload=function(){
	PageHelp.Init();
}
function clickBody(){		
	document.getElementById("time").innerHTML="10";
}
/*
setInterval(function(){
	if(parseInt(willClose)<=0){
		window.close();
	}
},10000);
*/
setInterval(function(){
	console.log(document.getElementById("time").innerHTML);
	document.getElementById("time").innerHTML=parseInt(document.getElementById("time").innerHTML)-1;
	if(parseInt(document.getElementById("time").innerHTML)==0){
		window.close();
	};	
},1000);
var PageHelp={
	Init:function(){
		document.getElementById("time").innerHTML="10";
		document.getElementsByTagName("body")[0].addEventListener("click",clickBody);
	}
}