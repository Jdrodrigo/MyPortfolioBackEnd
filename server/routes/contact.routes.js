import express from "express";
import Contact from "../models/contact.model.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET contact by id
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: "Contact not found" });
  }
});

// POST add new contact
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update contact by id
router.put("/:id", async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE contact by id
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE all contacts
router.delete("/", async (req, res) => {
  try {
    await Contact.deleteMany();
    res.status(200).json({ message: "All contacts deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
