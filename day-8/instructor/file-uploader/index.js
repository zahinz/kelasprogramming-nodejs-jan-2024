import express from "express";
import { getHealth, postHealth } from "./controller/health.js";
import { databaseInit } from "./database/index.js";

const app = express();
const PORT = 8585;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// datbase initialization
databaseInit();

// routes
app.get("/", getHealth);
app.post("/", postHealth);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
