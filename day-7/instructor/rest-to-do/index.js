import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";
import { testConnection } from "./database/connection.js";

const app = express();
const PORT = 8787;

// middleware
// parse application/json and application/x-www-form-urlencoded to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
testConnection();

// GET and POST health routes
app.get("/", healthController.get);
app.post("/", healthController.post);

// not found (404) route
app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
