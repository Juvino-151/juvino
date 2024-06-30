Cypress.Commands.add('waitForLoad', () => {
    cy.wait(10000);
  });
  
  Cypress.Commands.add('clearCookiesAndLocalStorage', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  

  Cypress.Commands.add('validatezipcodeorigem', () => {
    
      const ceps = [
        { value: '    ', shouldPass: false, message: 'CEP de origem é obrigatório' },
        { value: '54354543', shouldPass: false, message: 'CEP de origem inválido.' },
        { value: '0684', shouldPass: false, message: 'CEP de origem não é válido' }
      ];
    
      
      cy.get('#destinationPostcode').clear().type('54354543');
      cy.get('#weight').click();
      cy.get('[data-value="14"]').click();
      cy.get('#packageHeight').clear().type('22');
      cy.get('#packageWidth').clear().type('22');
      cy.get('#packageDepth').clear().type('22');
      cy.wait(500); 
    
     
      ceps.forEach(({ value, shouldPass, message }) => {
        
        cy.get('#originPostcode').clear().type(value);
    
        cy.get('[data-cy="calculator-submit"]').click();
    
       
        cy.contains(message).should('be.visible');
      });
    });


    Cypress.Commands.add('validateZipcodedestino', () => {
      const ceps = [
        { value: '    ', shouldPass: false, message: 'CEP de destino é obrigatório' },
        { value: '54354543', shouldPass: false, message: 'CEP de destino inválido.' },
        { value: '0684', shouldPass: false, message: 'CEP de destino não é válido' }
      ];
    
      
      cy.get('#originPostcode').clear().type('54354543');
      cy.get('#weight').click();
      cy.get('[data-value="14"]').click();
      cy.get('#packageHeight').clear().type('22');
      cy.get('#packageWidth').clear().type('22');
      cy.get('#packageDepth').clear().type('22');
      cy.wait(500); 
      
      ceps.forEach(({ value, shouldPass, message }) => {
        
        cy.get('#destinationPostcode').clear().type(value);
    
    
        cy.get('[data-cy="calculator-submit"]').click();
    
      
        cy.contains(message).should('be.visible');
      });
    });

   
    Cypress.Commands.add('validatemensangerpackge', () => {
      const dimensions = [
        { height: '0.3', width: '22', depth: '22', message: 'Altura mínima 0.4 cm.' },
        { height: '22', width: '7', depth: '22', message: 'Largura mínima 8 cm.' },
        { height: '22', width: '22', depth: '12', message: 'Comprimento mínimo 13 cm.' }
      ];
    
      dimensions.forEach(({ height, width, depth, message }) => {
       
        cy.get('#originPostcode').clear().type('82410630'); 
        cy.get('#destinationPostcode').clear().type('83820753'); 
        cy.get('#weight').click();
        cy.get('[data-value="0.3"]').click();
        cy.get('#packageHeight').clear().type(height);
        cy.get('#packageWidth').clear().type(width);
        cy.get('#packageDepth').clear().type(depth);
    
      
        cy.get('[data-cy="calculator-submit"]').click();
    
       
        cy.contains(message).should('be.visible');
      });
    });
    