import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";
import { databaseInit } from "./database/connection.js";
import createUser from "./controller/user.controller/create.js";

const app = express();
const PORT = 8787;

// middleware
// parse application/json and application/x-www-form-urlencoded to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection and execute DDL queries to create tables
databaseInit();

// GET and POST health routes
// all DML operations will be done in controller
app.get("/", healthController.get);
app.post("/", healthController.post);
app.post("/users", createUser);

// not found (404) route
app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
