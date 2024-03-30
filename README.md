-download visual studio code/intellij
-visual studio -> project> terminal > npm init
-then download cypress: npm install cypress --save-dev
-so you will able to see node_modules
launch cypress:>   
1> npm run cypress:open

How to Use POST Method: 

1> can use json body with hardcoded json payload
2>using random emailID
3> can read json from cypress fixture and use it in request body
 
a. using require ----> const
b. using cy.fixture - callback

=======================
Generate HTML report 

1> install cypress-mochawesome-reporter
    npm i --save-dev cypress-mochawesome-reporter

2> Edit config file (cypress.config.js by default)

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});


3> Add to cypress/support/e2e.js
   import 'cypress-mochawesome-reporter/register';

   ===========================

   run cypress hedless mode 

    npx cypress run

    run cypress with cypress automated cypress launch 
    npm run cypress:open

    ========================

    git add . 
    git commit -m "Your commit message here"
    git push origin <your branch name>