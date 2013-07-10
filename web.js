var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	//	Read content from file and put into buffer
	var content = fs.readFileSync('index.html');
	var buffer = new Buffer(content);

	//	Print contents
	response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});