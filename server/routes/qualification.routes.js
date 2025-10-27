import express from "express";
import Qualification from "../models/qualification.model.js";

const router = express.Router();

// GET all qualifications
router.get("/", async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.status(200).json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET qualification by ID
router.get("/:id", async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.status(200).json(qualification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new qualification
router.post("/", async (req, res) => {
  try {
    const newQualification = new Qualification(req.body);
    await newQualification.save();
    res.status(201).json(newQualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update qualification by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE qualification by ID
router.delete("/:id", async (req, res) => {
  try {
    await Qualification.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Qualification deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE all qualifications
router.delete("/", async (req, res) => {
  try {
    await Qualification.deleteMany();
    res.status(200).json({ message: "All qualifications deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
