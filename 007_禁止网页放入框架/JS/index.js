window.onload=function(){
	if(self!=top){
		top.location.href=self.location.href;
	}else{
		console.log("是顶层框架");
	}
}