import { Router } from "express";
import { index } from "../services/index.js";

const router = new Router();

router.get("/characters", (req, res) => {
  res.status(200).json(index());
});

export default router;
