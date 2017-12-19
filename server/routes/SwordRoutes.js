import express from "express";
import {list,create,remove} from "../controllers/SwordController";
const router = express.Router();

router.get("/swords",list);
router.post("/swords",create);
router.delete("/swords/:id",remove);

export default router;