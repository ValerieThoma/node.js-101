var http = require("http");
var fs = require("fs");     


function renderHomePage(){
	var theHTMLToGet = fs.readFileSync('homePage.html');
	return theHTMLToGet;
}

function renderScripts(){
	var jsToGet = fs.readFileSync('scripts.js');
	return jsToGet;
}

var server = http.createServer((req, res)=>{ 
	console.log(req.url);

	if(req.url ==='/'){
		var homePageHTML = renderHomePage() 
		res.writeHead(200,{'content-type': 'text/html'});
		res.end(homePageHTML);
	}else if(req.url === '/scripts.js'){
		var jsContents = renderScripts();
		res.writeHead(200,{'content-type': 'text/javascript'});
		res.end(jsContents);
	}else{
		res.writeHead(404,{'content-type': 'text/html'});
		res.end("<h1>Zoops</h1");
	}
	// res.writeHead(200,{'content-type': 'text/html'})
	// res.end("<h1>Sanity Check</h1");

})

server.listen(8001);
console.log("Server is listening for HTTP traffic on port 8001...");