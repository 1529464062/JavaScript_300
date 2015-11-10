window.onload=function(){
	document.getElementById("addFav").href="javascript:void(0)";
	document.getElementById("addFav").addEventListener("click",addFav);
}
function addFav(){
	if(window.external.AddFavorite){
		window.external.AddFavorite('./单击加入收藏夹.html','javascript300实例');
	}else{
		window.sidebar.addPanel('javascript300实例','http://www.baidu.com','');
	}
}