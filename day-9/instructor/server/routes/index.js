import { Router } from "express";
import register from "../controllers/auth/register.js";
import login from "../controllers/auth/login.js";

const publicRouter = Router();

publicRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

publicRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello world!" });
});

publicRouter.post("/register", register);
publicRouter.post("/login", login);

export default publicRouter;
