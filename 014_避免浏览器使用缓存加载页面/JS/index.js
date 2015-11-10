function getLinkHref(){
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var link=links[i];
		var href=link.href;
		if(href.indexOf('?')>-1){
			href+='&time='+new Date().getTime();
			console.log(href);
		}else{
			href+='?time='+new Date().getTime();
			console.log(href);
		}
		link.href=href;
	}
}
/*
window.onload=function(){
	getLinkHref();
}
*/
document.onreadystatechange=function(){
	if(document.readyState=='complete'){
		getLinkHref();
	}	
}