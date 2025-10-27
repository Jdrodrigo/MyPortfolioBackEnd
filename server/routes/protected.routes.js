import express from "express";
import { requireSignin } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/secret", requireSignin, (req, res) => {
  res.json({
    message: "Access granted — protected route reached!",
    user: req.auth,
  });
});

export default router;


