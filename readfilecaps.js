var fs = require("fs"); 
var http = require("http");



//Read file using fs.readFile//

fs.readFile('file1.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    var newData = data.toUpperCase();
    console.log(newData);
});



//Read file using fs.readFileSync//


try {  
    var data = fs.readFileSync('file1.txt', 'utf8');
    var newData = data.toUpperCase();
    console.log(newData);    
} catch(e) {
    console.log('Error:', e.stack);
}

//Read file using createReadStream method///


// var data = '';

// var readStream = fs.createReadStream('file1.txt', 'utf8');

// readStream.on('data', function(chunk) {  
//     data += chunk;
// }).on('end', function() {
//     console.log(data);
// });


