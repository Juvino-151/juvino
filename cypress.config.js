const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://web.superfrete.com/',
    "viewportWidth": 1366,
    "viewportHeight": 768,
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 60000, 
    
  },

video: true,
videosFolder: 'cypress/videos'


});







