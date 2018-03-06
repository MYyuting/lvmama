		var wid=document.documentElement.clientWidth;
		document.documentElement.style.fontSize=wid/432*100+"px";
		window.onresize=function(){
			document.location.reload();
		}