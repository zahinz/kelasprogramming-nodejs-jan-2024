import { Router } from "express";
import register from "../controllers/auth/register.js";
import login from "../controllers/auth/login.js";
import listAllSlotsForPublic from "../controllers/slot/slot.public.list.js";
import bookASlotForPublic from "../controllers/slot/slot.public.booking.js";

const publicRouter = Router();

publicRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

publicRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello world!" });
});

publicRouter.post("/register", register);
publicRouter.post("/login", login);

publicRouter.get("/slots", listAllSlotsForPublic);
publicRouter.post("/slots/:id/book", bookASlotForPublic);

export default publicRouter;
