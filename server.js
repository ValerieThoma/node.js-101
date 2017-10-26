// node is not js but reads js
// you can use it like "$python nameoffile"
// var atlTeams = [
// 	'Braves',
// 	'Falcons',
// 	'United',
// 	'Hawks'
// ]
// console.log(atlTeams);
// var atl = {
// 	bball: "Hawks",
// 	football: "Falcons",
// 	soccer: "United",
// 	baseball: "Braves"
// }

// console.log(atl);

var http = require('http');
// console.log(http);

var server = http.createServer((req, res)=>{
	// console.log(req.rawHeaders);
	res.writeHead(200,{"content-type": "text/text"});
	res.write('<h1>Hello love!</h1>');
	res.end();
})
console.log('server is listening for connections on port 8000');
server.listen(8000)
