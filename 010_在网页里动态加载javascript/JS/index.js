window.onload=function(){
	document.getElementById("load").addEventListener("click",load_click);
}
function load_click(){
	var theHead=document.getElementsByTagName("head").item(0);
	var myScript=document.createElement("script");
	myScript.src="JS/index_1.js";
	myScript.type="text/javascript";
	myScript.defer=true;
	theHead.appendChild(myScript);
}