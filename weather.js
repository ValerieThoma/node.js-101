var http = require("http");
var apikey = 'e312dbeb8840e51f92334498a261ca1d';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
var request = require('request'); ///we have this b/c we npm installed it in the terminal!
var weatherAsData = "";


request.get(weatherUrl, (error, response, weatherData)=>{  
	console.log(JSON.parse(weatherData));
});


// var request = http.get(weatherUrl,(theResponse)=>{
// 	console.log(theResponse.statusCode);
// 	theResponse.on('data',(chunkOfData)=>{
// 		// console.log(chunkOfData);
// 		weatherAsData += chunkOfData;
// 	});
// 	theResponse.on('end',()=>{
// 		console.log(weatherAsData);
// 	})
// })