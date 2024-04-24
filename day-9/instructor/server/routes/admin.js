import { Router } from "express";
import isAuth from "../middlewares/isAuth.js";

const privateRouter = Router();

privateRouter.use(isAuth);

privateRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello Admin!</h1>");
});

privateRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello admin!" });
});

export default privateRouter;
