const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    "reporter": "mochawesome",
    "reporterOptions":{
      "reportDir":"Cypress/reporte/mochawesome-report",
      "quiet": true,
      "overwrite": true,
      "html": true,
      "json": true,
      "timestamp":"mmddyyyy_HHMMss"
    },
    setupNodeEvents(on, config) {


      // implement node event listeners here
    },
  },
});
