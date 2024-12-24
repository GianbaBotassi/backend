import { Router } from "express";
import {
  getAllBoulders,
  getBoulderById,
  saveBoulder,
  filteredBoulders,
} from "../controllers/boulderController";

const router: Router = Router();

router.get("/", getAllBoulders);
router.post("/getBoulder", getBoulderById);
router.post("/saveBoulder", saveBoulder);
router.post("/filteredBoulders", filteredBoulders);

export default router;
