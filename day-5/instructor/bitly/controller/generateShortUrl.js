import crypto from "crypto";
import fs from "fs";
import path from "path";

function GenerateShortUrl(req, res) {
  // WRITE PSUEDO CODE
  // get the long url from the request body
  // generate a short url - google.com -> localhost:3000/randomString
  // randomString - 6 characters generated randomly using crypto module
  // save the long url and short url in file form JSON or database
  // send the short url in the response

  // get url from request body
  const url = req.body.url;

  // generate short url
  const randomString = crypto.randomBytes(3).toString("hex");
  const shortUrl = `${randomString}`;

  // save into json
  // [{longUrl: "google.com", shortUrl: "localhost:3000/randomString"}, {longUrl: "facebook.com", shortUrl: "localhost:3000/randomString"}, {longUrl: "twitter.com", shortUrl: "localhost:3000/randomString"}]
  const linksFilePath = path.join(process.cwd(), "model", "links.json");

  // read data from file
  const fileStringData = fs.readFileSync(linksFilePath, { encoding: "utf-8" });
  const fileData = JSON.parse(fileStringData);

  // combine existing data and new data
  const newData = {
    url: url,
    shortUrl: shortUrl,
  };
  fileData.push(newData);

  // write data to file
  const stringData = JSON.stringify(fileData, null, 2);
  fs.writeFileSync(linksFilePath, stringData);

  res.send(shortUrl);
}

export default GenerateShortUrl;
