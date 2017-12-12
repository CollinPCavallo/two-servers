const http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function handelRequest1(request, response) {
    response.end('You are alright I guess');
}
function handelRequest2(request, response) {
    response.end('Go play in traffic');
}
var server1 = http.createServer(handelRequest1);
var server2 = http.createServer(handelRequest2);

server1.listen(PORT1,()=>{
    console.log('Server listening on port' + PORT1)
});
server2.listen(PORT2,()=>{
    console.log('Server listening on port' + PORT2)
});