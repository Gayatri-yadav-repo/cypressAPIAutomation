const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  reporter: 'cypress-mochawesome-reporter',// for html reporter 

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // htmpl reporter
      // implement node event listeners here
    },
  },
});
