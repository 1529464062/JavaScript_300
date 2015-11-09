window.onload=function(){
	document.getElementsByTagName("input")[1].addEventListener("click",changeURL);
}
function changeURL(){
	var newUrl=document.getElementById("newURL").value;
	self.location.href=newUrl;
}