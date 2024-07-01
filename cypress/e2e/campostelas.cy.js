describe('Campos', () => {

    context('Validar campos', () => {
      it('CEP Origem', () => {
        
        cy.validatezipcodeorigem()
      });
      it('CEP Destino', () => {
        
        cy.validateZipcodedestino()
  
    });

      it('Altura, Largura e Comprimento', () => {
        
        cy.validatemensangerpackge()
  });
});
});