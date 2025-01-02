import { Router } from "express";
import { getLayout } from "../controllers/layoutController";
import { testWithoutDb } from "../controllers/layoutController";
import { testWithDb } from "../controllers/layoutController";

const router: Router = Router();

router.get("/", getLayout);
router.get("/testWithoutDb", testWithoutDb);
router.get("/testWithDb", testWithDb);

export default router;
