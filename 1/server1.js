var http = require("http");

http.createServer(function(request,response){
console.log("Hurrey! I got visitor");
response.writeHead(200,{"Content-Type":"text/plain"});
response.write("Welcome to the world of Node.js");
response.end();
}).listen(8888);
