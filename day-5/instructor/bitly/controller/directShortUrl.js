import fs from "fs";
import path from "path";

function Redirect(req, res) {
  // WRITE PSUEDO CODE
  // get the short url from the request parameter
  // read the file to get the long url for the short url
  // redirect the user to the long url

  // get short url from request parameter
  const shortUrl = req.params.shortUrl;

  // read data from file
  const dataFilePath = path.join(process.cwd(), "model", "links.json");
  const fileStringData = fs.readFileSync(dataFilePath, { encoding: "utf-8" });
  const fileData = JSON.parse(fileStringData);

  // find the long url for the short url using Array.find
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  const link = fileData.find((link) => link.shortUrl === shortUrl);
  const longUrl = link.url;

  console.log("longUrl", longUrl);

  // redirect the user to the long url with status code 301
  res.status(301).redirect(longUrl);
}

export default Redirect;
