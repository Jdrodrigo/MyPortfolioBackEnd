import express from "express";
import userCtrl from "../controllers/user.controller.js";
import {
  requireSignin,
  hasAuthorization,
  requireAdmin,
} from "../controllers/auth.controller.js";

const router = express.Router();

// Public signup (POST /api/users)
router.route("/")
  .post(userCtrl.create) // signup
  .get(requireSignin, requireAdmin, userCtrl.list); // admin: list all users

// Routes that require user identity checking
router.route("/:userId")
  .get(requireSignin, hasAuthorization, userCtrl.read)
  .put(requireSignin, hasAuthorization, userCtrl.update)
  .delete(requireSignin, hasAuthorization, userCtrl.remove);

// Load user from ID parameter
router.param("userId", userCtrl.userByID);

export default router;
