const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //project id created when the project is created in cypress dashboard then copy that id here
  projectId: "fxg5ve",
  "reporter": "mochawesome",

  env: {
    //give the env variables here which will be automatically called in desired test
    url: "https://rahulshettyacademy.com/angularpractice/",
  },

  "retries" : {
    //Configure retries for 'cypress run'
    //default is 0
    "runMode" : 1,
  },

  //this will tell cypress to run .feature files along with .js files
 // "testFiles" : "**/*.feature",
 

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
    },
  },
});
