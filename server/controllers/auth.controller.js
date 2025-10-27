import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import User from "../models/user.model.js";
import config from "../../config/config.js";

// --- SIGN IN ---
export const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ error: "User not found" });

    if (!user.authenticate(req.body.password))
      return res.status(401).json({ error: "Email and password don't match." });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "2h" });

    res.cookie("t", token, { expire: new Date() + 9999 });
    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

// --- SIGN OUT ---
export const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed out successfully" });
};

// --- PROTECTED ROUTE ---
export const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  requestProperty: "auth"
});
