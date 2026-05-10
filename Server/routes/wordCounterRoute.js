import express from "express";
import { analyzeText } from "../controller/wordCounterController.js";
 const router = express.Router();

router.post("/analyze", analyzeText);

export default router;