import { Router } from "express";
import isAuth from "../middlewares/isAuth.js";
import createNewSlot from "../controllers/slot/slot.create.js";
import listAllSlots from "../controllers/slot/slot.list.js";
import deleteSlot from "../controllers/slot/slot.delete.js";

const privateRouter = Router();

privateRouter.use(isAuth);

privateRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello Admin!</h1>");
});

privateRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello admin!" });
});

privateRouter.post("/slots", createNewSlot);
privateRouter.get("/slots", listAllSlots);
privateRouter.delete("/slots/:id", deleteSlot);

export default privateRouter;
