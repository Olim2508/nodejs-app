const http = require('http');
const dt = require("./mymodule")
const url = require('url');

const hostname = 'localhost';
const port = 3003;

const server = http.createServer((req, res) => {
  console.log("req", req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.myDateTime());
  const q = url.parse(req.url, true).query
  console.log(q)
  res.write(toString(q))
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
