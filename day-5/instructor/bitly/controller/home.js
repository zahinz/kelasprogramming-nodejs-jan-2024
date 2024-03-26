import fs from "fs";
import path from "path";

function Home(req, res) {
  // __dirname is not available in ESM modules
  // thus we use process.cwd() to get the current working directory
  const filePath = path.join(process.cwd(), "pages", "index.html");
  const page = fs.readFileSync(filePath, "utf8");
  res.send(page);
}

// export the function in ESM
export default Home;
