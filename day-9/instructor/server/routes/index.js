import { Router } from "express";

const publicRouter = Router();

publicRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

publicRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello world!" });
});

export default publicRouter;
