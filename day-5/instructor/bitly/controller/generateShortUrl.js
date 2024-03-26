function generateShortUrl(req, res) {
  console.log(req.body);
  res.send("Shorten");
}

export default generateShortUrl;
