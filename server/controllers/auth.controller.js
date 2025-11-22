import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import User from "../models/user.model.js";
import config from "../../config/config.js";

// POST /api/auth/signin
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: "User not found" });

    if (!user.authenticate(password))
      return res.status(401).json({ error: "Email and password don't match." });

    // include role in token for role-based access
    const token = jwt.sign(
      { _id: user._id.toString(), role: user.role },
      config.jwtSecret,
      { expiresIn: "2h" }
    );

    // set cookie (you can also store token on frontend)
    res.cookie("t", token, {
      expire: new Date() + 9999,
      httpOnly: true,
    });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Signin error:", err);
    return res.status(500).json({ error: "Could not sign in" });
  }
};

// GET /api/auth/signout
export const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed out successfully" });
};

// Middleware: user must be signed in
export const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth", // decoded token will be in req.auth
});

// Middleware: user matches the profile being accessed
export const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id.toString() === req.auth._id;
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized" });
  }
  next();
};

// Middleware: admin-only resources
export const requireAdmin = (req, res, next) => {
  if (!req.auth || req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin access only" });
  }
  next();
};

