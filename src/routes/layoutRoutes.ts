import { Router } from "express";
import { getLayout } from "../controllers/layoutController";

const router: Router = Router();

router.get("/", getLayout);

export default router;
