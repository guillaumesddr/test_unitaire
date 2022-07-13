describe('empty spec', () => {
  it('Validation de la page', () => {
    cy.visit('http://localhost:8501')
    cy.get('input').eq(0).clear().type('100').type('{enter}')
    cy.get('input').eq(1).clear().type('2').type('{enter}')
    cy.get('input').eq(2).clear().type('0').type('{enter}')
    //cy.get('p').should('not.contain', '-')
    cy.get('p').then((valeur) => {
      var val = parseFloat(valeur[0].innerText.substr(27))
      //console.log(typeof val)
      expect(val).to.be.greaterThan(10000)
      //cy.log('Prix supérieur a 10000', val > 10000)
    })
  })
})