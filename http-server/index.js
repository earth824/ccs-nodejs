const http = require('http');
const fs = require('fs/promises');
// http request message ===> request object (req)
// http response message ===> response object (res)
const server = http.createServer(async (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.writeHead(201);
  // res.end('<h1>Response from HTTP server ruuning on PORT 8000</h1>');
  console.log(req.url);

  if (req.url === '/downloads') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    const result = { name: 'john', email: 'john@gmail.com' };
    res.end('<h1>This is a download Page</h1>'); // { "name": "john", "email": "john@gmail.com" }
  } else if (req.url === '/customers') {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const result = { message: 'Customer Page' };
    res.end(JSON.stringify(result));
  } else if (req.url === '/login') {
    if (req.method === 'GET') {
      console.log(req.method);
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      const file = await fs.readFile('login.html', 'utf-8');
      res.end(file);
    } else if (req.method === 'POST') {
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);

      res.end('<h1>Success Login</h1>');
    }
  }
});
// computer 0-65535
// mysql server 3306
// postgresql server 5432
server.listen(8000, () => console.log('server running'));
