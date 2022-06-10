# Getting Started with Cypress Automation

Cypress is a next generation front-end automation testing tool designed for modern web application. 
Cypress uses Mocha framework and Chai assertions.


## Pre-requisites
1. VisualStudio (https://code.visualstudio.com/)
2. Node.js (https://nodejs.org/en/)

## Setup

Download the VS code and Node.js form the given links. Now create a new project and open the VS code terminal then run the following commands.

* Install Node Package Manager
```sudo npm install```

* Install Cypress 
```npm install cypress --save-dev```

* Create a package.json file (Auto created)
```npm -i init```

## Execute Tests
We can run the test in cypress runner as well as in CLI. Run the below command on the save VS code terminal.

* Open the cypress runner locally 
```npx cypress open```

* Run the tests in CLI (Headless)
```./node_module/.bin/cypress run```

* Run the tests in CLI (Headed) 
```cypress run --headed```

* Run the tests in desired browser 
```cypress run --browser chrome```
