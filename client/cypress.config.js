import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",   // your Vite frontend URL
    video: true,                        // enable video recording
    setupNodeEvents(on, config) {
      // You can add plugins or event listeners here if needed
    },
  },
});
