import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  completion: { type: Date, default: Date.now },
  description: { type: String }
});

export default mongoose.model("Project", ProjectSchema);

