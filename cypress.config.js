const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2a37fk",
  e2e: {
    baseUrl: "http://localhost:8080",
  },
});
