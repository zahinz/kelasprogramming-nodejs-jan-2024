const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 8989;

// initialise static folder - css, js, images
app.use(express.static("public"));

// initialise body-parser
// why do we need body-parser?
// body-parser is a middleware that helps to parse the body from http request and make it available under req.body as a javascript object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request
app.get("/", function (req, res) {
  const homePagePath = path.join(__dirname, "pages", "index.html");
  const homePage = fs.readFileSync(homePagePath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(homePage);
});

app.get("/bmi-form", function (req, res) {
  const bmiFormPath = path.join(__dirname, "pages", "bmi-form.html");
  const bmiForm = fs.readFileSync(bmiFormPath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(bmiForm);
});

app.post("/bmi-result", function (req, res) {
  // const bmi = req.query.bmi;

  // Thanks to Azwan for this suggestion
  // business logic via server
  const data = req.body;
  console.log(data);
  const weight = Number(data.weight);
  const height = Number(data.height);
  const bmi = (weight / (height * height)).toFixed(2);
  console.log(bmi);

  // serve function
  const bmiResultPath = path.join(__dirname, "pages", "bmi-result.html");
  let bmiResult = fs.readFileSync(bmiResultPath, "utf-8");
  // bmiResult is a string
  // replace the placeholder with the actual value
  if (bmi) {
    bmiResult = bmiResult.replace("[[BMI-RESULT]]", bmi);
  } else {
    bmiResult = bmiResult.replace("[[BMI-RESULT]]", "No BMI value");
  }

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(bmiResult);
});

// POST request from BMI form
// app.post("/calculate", function (req, res) {
//   // view the data from the form inputs
//   const data = req.body;
//   console.log(data);
//   const weight = Number(data.weight);
//   const height = Number(data.height);
//   const bmi = (weight / (height * height)).toFixed(2);
//   console.log(bmi);
//   res.redirect("/bmi-result" + "?bmi=" + bmi);
// });

// not found page
app.use(function (req, res) {
  const notFoundPath = path.join(__dirname, "pages", "404.html");
  const notFound = fs.readFileSync(notFoundPath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.status(404).send(notFound);
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT ${PORT}`);
});
