const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 4000,
  watchForFileChanges:false,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
