const http = require('http');
// http request message ===> request object (req)
// http response message ===> response object (res)
const server = http.createServer((req, res) => {
  res.end('<h1>Response from HTTP server ruuning on PORT 8000</h1>');
});
// computer 0-65535
// mysql server 3306
// postgresql server 5432
server.listen(8000, () => console.log('server running'));
