const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://automationexercise.com",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Automation Exercise Test Report",
    embeddedScreenshots: true,
    inlineAssets: true
  }
});

