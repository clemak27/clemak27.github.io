describe('Basic tests', () => {

  context('Home', () => {
    it('contains content', () => {
      cy.visit('/')
      cy.get('.index').get('h1').contains('hello world!')
    })

    it('contains navbar', () => {
      cy.get('nav').get('.navbar-nav').contains('Home').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('Linux Setup').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('Home Server').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('Random Cats').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('About me').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('About this page').and('have.class', 'nav-link')
      cy.get('nav').get('.navbar-nav').contains('GitHub').and('have.class', 'nav-link')
    })
  })

  context('Linux Setup', () => {
    it('contains content', () => {
      cy.visit('/linux_setup')
      cy.get('.linux_setup').get('h1').contains('My Linux Setup')
      cy.get('.linux_setup').get('#carousel')
      cy.get('.linux_setup').get('h2').contains('Some software I use:')
      cy.get('.linux_setup').get('h2').contains('Nix')
    })
  })

  context('Home Server', () => {
    it('contains content', () => {
      cy.visit('/home_network')
      cy.get('.home_network').get('h1').contains('My Home Network')
      cy.get('.home_network').get('h2').contains('neofetch').get('img')
      cy.get('.home_network').get('h2').contains('services')
    })
  })

  context('Random Cats', () => {
    it('contains content', () => {
      cy.intercept('GET', 'https://api.thecatapi.com/v1/images/search', {
        statusCode: 200,
        body: [{
          "breeds": [],
          "categories": [{ "id": 15, "name": "clothes" }],
          "id": "MTgwMzkyNg",
          "url": "https://thecatapi.test/images/MTgwMzkyNg.png",
          "width": 350,
          "height": 350
        }]
      })
      cy.intercept('GET', 'https://thecatapi.test/images/MTgwMzkyNg.png', {
        statusCode: 200,
        fixture: 'cat.png'
      })

      cy.visit('/cats')
      cy.get('.cats').get('#refreshButton')
      cy.get('.cats').get('#catContainer')
    })
  })

  context('About me', () => {
    it('contains content', () => {
      cy.visit('/cv')
      cy.get('.cv').get('h1').contains('About me')
    })
  })

  context('About this page', () => {
    it('contains content', () => {
      cy.visit('/about')
      cy.get('.about').get('h1').contains('About this page')
    })
  })

})
