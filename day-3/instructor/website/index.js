const http = require("http");
const fs = require("fs");
const path = require("path");

// read html pages and paths
const indexHtmlPath = path.join(__dirname, "pages", "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
const projectsHtmlPath = path.join(__dirname, "pages", "projects.html");
const projectsHtml = fs.readFileSync(projectsHtmlPath, "utf-8");
const NotFoundHtmlPath = path.join(__dirname, "pages", "404.html");
const NotFoundHtml = fs.readFileSync(NotFoundHtmlPath, "utf-8");

// read css file
const cssPath = path.join(__dirname, "public", "style.css");
const css = fs.readFileSync(cssPath, "utf-8");

// read js file
const jsPath = path.join(__dirname, "public", "script.js");
const js = fs.readFileSync(jsPath, "utf-8");

// using async read file
let indexHtml2;
fs.readFile(indexHtmlPath, "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    indexHtml2 = data;
  }
});

// monitor visitor count
let visitorCount = 0;

const server = http.createServer(function (req, res) {
  // url to handle server routing
  const url = req.url;

  // handling public files or static files like css, js, images
  // server style.css
  if (url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(css);
    res.end();
    return;
  }

  // handle js files
  if (url === "/script.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(js);
    res.end();
    return;
  }

  // handle html pages
  switch (url) {
    case "/":
      visitorCount++;
      console.log("Visitor count: ", visitorCount);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(indexHtml);
      res.end();
      break;
    case "/projects":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(projectsHtml);
      res.end();
      break;
    case "/youtube":
      res.writeHead(301, { Location: "https://www.youtube.com" });
      res.end();
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(NotFoundHtml);
      res.end();
  }
});

server.listen(8888, function () {
  console.log("Website server is running on port 8888");
});
