var sitePath = process.argv[2] || ".";

var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

console.log(sitePath);
console.log("Starting server in: " + __dirname + '/' + sitePath);
app.use(express.static(__dirname + '/' + sitePath));
var PORT = process.env.PORT || 4242;

//Start the web server!
app.listen(PORT, function(){
    console.log('Server up and running');
});