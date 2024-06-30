

  Cypress.Commands.add('fluxoprincipalcalculo', () => {
    cy.get('#originPostcode').type('82410630');
    cy.get('#destinationPostcode').type('83820753'); 
    cy.get('#weight').click();
    cy.get('[data-value="0.3"]').click(); 
    cy.get('#packageHeight').type('2');
    cy.get('#packageWidth').type("11");
    cy.get('#packageDepth').type("16");
    cy.get('[data-cy="calculator-submit"]').click();
    cy.get(':nth-child(5) > .MuiPaper-elevation1 > .MuiAccordionSummary-root > .MuiAccordionSummary-content > .MuiGrid-container > .MuiGrid-grid-xs-2 > .MuiTypography-root')
    .scrollIntoView();

    cy.contains('PAC').should('be.visible');
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper > [data-testid="ExpandMoreIcon"]').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root').should('be.visible');
    cy.contains('SEDEX').should('be.visible');
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper > [data-testid="ExpandMoreIcon"]').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root').should('be.visible');
    cy.contains('Mini Envios').should('be.visible');
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper > [data-testid="ExpandMoreIcon"]').click()
    cy.get(':nth-child(5) > .MuiPaper-elevation1 > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root').should('be.visible');
    
    });