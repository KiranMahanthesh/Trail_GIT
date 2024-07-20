const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { defineConfig } = require('cypress');

async function setupNodeEvents(on, config) {
  // Add the Cucumber preprocessor plugin
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Use esbuild for preprocessing JavaScript files
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280, // Adjusted to a more common default
    viewportHeight: 720, // Adjusted to a more common default
    defaultCommandTimeout: 10000, // Timeout for commands
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.feature", // Adjusted to match all feature files
    supportFile: 'cypress/support/e2e.js', // Specify the support file
   // baseUrl: 'http://localhost:3000', // Add the base URL if needed
  },
  video: false, // Disable video recording
  videoCompression: 32, // Compression level for videos
  videosFolder: 'cypress/videos', // Folder for video recordings
  waitForAnimations: false, // Disable waiting for animations
  watchForFileChanges: false, // Disable watching for file changes
});
