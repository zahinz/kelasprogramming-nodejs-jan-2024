import express from "express";
import Home from "./controller/home.js";
import Dashboard from "./controller/dashboard.js";
import GenerateShortUrl from "./controller/generateShortUrl.js";
import Redirect from "./controller/directShortUrl.js";

const app = express();
const PORT = 3000;

// handle static public files
app.use(express.static("public"));

// handle body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Home);
app.post("/shorten", GenerateShortUrl);
app.get("/dashboard", Dashboard);

// Initiaise a param route by using a colon before the route parameter
app.get("/:shortUrl", Redirect);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
