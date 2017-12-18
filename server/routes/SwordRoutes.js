import express from "express";
import {list,create} from "../controllers/SwordController";
const router = express.Router();

router.get("/swords",list)
router.post("/swords",create)

export default router;