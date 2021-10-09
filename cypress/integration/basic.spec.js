describe('open all pages', () => {

  it('opens page', () => {
    cy.visit('http://localhost:3000')
  })

  it('opens linux_setup', () => {
    cy.visit('http://localhost:3000/linux_setup')
  })

  it('opens home_network', () => {
    cy.visit('http://localhost:3000/home_network')
  })

  it('opens cats', () => {
    cy.visit('http://localhost:3000/cats')
  })

  it('opens cv', () => {
    cy.visit('http://localhost:3000/cv')
  })

  it('opens about', () => {
    cy.visit('http://localhost:3000/about')
  })

})
