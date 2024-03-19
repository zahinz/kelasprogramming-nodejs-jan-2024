const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url.toLowerCase();
  console.log(url);
  // we can handle different urls to send different responses

  // using res object to send back response to the client
  // send html
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<div style="background-color:red"><h1>Home</h1></div>`);
    res.end();
    return;
  }

  if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<div style="background-color:blue"><h1>About</h1></div>`);
    res.end();
    return;
  }

  if (url === "/youtube") {
    res.writeHead(301, { Location: "https://www.youtube.com" });
    res.end();
    return;
  }

  if (url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ name: "Zahin", age: 30, location: "Cyberjaya" })
    );
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(
    `<div style="background-color:yellow"><h1>Page not found</h1></div>`
  );

  // send json
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.write(JSON.stringify({ name: "John", age: 30 }));

  // make redirection
  // res.writeHead(301, { Location: "https://www.google.com" });
  // always end the response if not the browser will keep loading
  res.end();
});

// why need port number?
// first we need to connect to the server using ip address
// our own computer has an host or ip address - 127.0.0.1 (localhost)
// common port numbers: 80 (http), 443 (https), 22 (ssh), 21 (ftp), 25 (smtp),
// node server listens on port 8888
// http://localhost:8888 - this is the url to connect to our own server
server.listen(2323);

// http status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 1xx - informational
// 2xx - success
// 3xx - redirection
// 4xx - client error
// 5xx - server error
