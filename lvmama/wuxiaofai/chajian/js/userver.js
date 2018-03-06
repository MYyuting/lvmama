var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	//设置跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//写响应头
	res.writeHeader("200",{"Content-Type":"text/html;charset=utf-8"});
	
	//读取文件
	fs.readFile("text.txt","utf-8",function(err,data){
		if(err){
			throw err
		}
		res.end(data);
	});
}).listen(2255,function(){
	console.log("ok")
});
