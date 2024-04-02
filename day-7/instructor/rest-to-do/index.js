import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";

const app = express();
const PORT = 8787;

// GET and POST health routes
app.get("/", healthController.get);
app.post("/", healthController.post);

// not found (404) route
app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
