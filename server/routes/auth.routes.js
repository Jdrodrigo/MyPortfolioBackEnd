import express from "express";
import { signin, signout, requireSignin } from "../controllers/auth.controller.js";
import { sign } from "crypto";

const router = express.Router();

router.post("/signup", signin);

// POST /api/auth/signin
router.post("/signin", signin);

// GET /api/auth/signout
router.get("/signout", signout);

export default router;
