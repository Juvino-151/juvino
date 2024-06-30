
import './commands';
import './global-calculo'


beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
    cy.waitForLoad()
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false;
  });
