const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  projectId: "fqqhh9",
  e2e: {
    async setupNodeEvents(on, config) {
      // Requerido por cucumber-preprocessor
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern:[
      "**/*.feature", 

    ],

    stepDefinitions: "cypress/e2e/Features/**/*.js",
    viewportWidth: 1500,
    viewportHeight: 760,
    chromeWebSecurity: false,
  },
});
