import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "baseUrl": "http://localhost:4200",
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
