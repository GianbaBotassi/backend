import { Router } from "express";
import { getLayout } from "../controllers/layoutController";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Hello Costaboard");
});

export default router;
