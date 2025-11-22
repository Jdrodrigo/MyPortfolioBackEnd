import mongoose from "mongoose";
import config from "./config/config.js";
import app from "./server/express.js";

// Ensure models are registered
import "./server/models/user.model.js";
import "./server/models/contact.model.js";
import "./server/models/project.model.js";
import "./server/models/qualification.model.js";

mongoose.Promise = global.Promise;

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("✅ Connected to MongoDB database.");
    app.listen(config.port, (err) => {
      if (err) {
        console.error("Server error:", err);
      } else {
        console.info(`✅ Server started on port ${config.port}.`);
      }
    });
  })
  .catch((err) => {
    console.error("❌ Unable to connect to database:", err);
  });

// Root route (for quick test in browser)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

