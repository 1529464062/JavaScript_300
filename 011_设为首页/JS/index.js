window.onload=function(){
	document.getElementById("setHome").href="javascript:void(0)";
	document.getElementById("setHome").addEventListener("click",setMyHomePage);
}
function setMyHomePage(){
	//判断是否为ie浏览器
	if(document.all){
		document.body.style.behavior='url(#default#homepage)';
		document.body.setHomePage('http://www.myhomepage.com');
		console.log("设置成功");
	}else{
		if(window.sidebar){
			//通过Firefox特有的组件设置首页地址
			var thePrefs=Components.classes['@mozilla.org/preference-service;1'].getservice(components,interface.nsIPrefBranch);
			thePrefs.setCharPref('browser.startup.homepage','http://www.myhomgpage.com');
			console.log("设置成功");
		}else{
			console.log("设置不成功");
		}
	}
}