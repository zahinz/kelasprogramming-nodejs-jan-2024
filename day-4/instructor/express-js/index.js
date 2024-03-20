const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 8989;

// GET request
app.get("/", function (req, res) {
  const homePagePath = path.join(__dirname, "pages", "index.html");
  const homePage = fs.readFileSync(homePagePath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.send(homePage);
});

app.get("/bmi-form", function (req, res) {
  const bmiFormPath = path.join(__dirname, "pages", "bmi-form.html");
  const bmiForm = fs.readFileSync(bmiFormPath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.send(bmiForm);
});

app.get("/bmi-result", function (req, res) {
  const bmiResultPath = path.join(__dirname, "pages", "bmi-result.html");
  const bmiResult = fs.readFileSync(bmiResultPath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.send(bmiResult);
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT ${PORT}`);
});
