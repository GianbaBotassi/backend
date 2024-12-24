import { Router } from "express";
import { doLogin, doRegistration } from "../controllers/loginController";

const router: Router = Router();

router.post("/login", doLogin);
router.post("/register", doRegistration);

export default router;
