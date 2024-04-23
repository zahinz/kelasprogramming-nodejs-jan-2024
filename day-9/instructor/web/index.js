import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const homePath = path.resolve(process.cwd(), "html", "index.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(homePath);
});

app.get("/admin", (req, res) => {
  const adminPath = path.resolve(process.cwd(), "html", "admin.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(adminPath);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
