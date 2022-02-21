describe('Basic tests', () => {

  context('Home', () => {
    it('contains content', () => {
      cy.visit('/')
      cy.get('.index').get('h1').contains('hello world!')
    })

    it('contains navigation', () => {
      cy.get('nav').should('have.class', 'v-navigation-drawer--close')
      cy.get('header').get('button').click();
      cy.get('nav').should('have.class', 'v-navigation-drawer--open')

      cy.get('nav').contains('Home').and('have.class', 'v-list-item')
      cy.get('nav').contains('Linux Setup').and('have.class', 'v-list-item')
      cy.get('nav').contains('Homelab').and('have.class', 'v-list-item')
      cy.get('nav').contains('Random Cat').and('have.class', 'v-list-item')
      cy.get('nav').contains('About Me').and('have.class', 'v-list-item')
      cy.get('nav').contains('About this page').and('have.class', 'v-list-item')
    })
  })

  context('Linux Setup', () => {
    it('contains content', () => {
      cy.visit('/linux_setup')
      cy.get('.linux_setup').get('h1').contains('My Linux Setup')
      cy.get('.linux_setup').get('.v-carousel')
      cy.get('.linux_setup').get('h2').contains('My journey so far')
      cy.get('.linux_setup').get('h3').contains('Linux Mint')
      cy.get('.linux_setup').get('h3').contains('Ubuntu')
      cy.get('.linux_setup').get('h3').contains('Kubuntu')
      cy.get('.linux_setup').get('h3').contains('Manjaro')
      cy.get('.linux_setup').get('h3').contains('Arch Linux')
      cy.get('.linux_setup').get('h3').contains('NixOS')
      cy.get('.linux_setup').get('h3').contains('Fedora Silverblue')
    })
  })

  context('Home Server', () => {
    it('contains content', () => {
      cy.visit('/home_network')
      cy.get('.home_network').get('h1').contains('My Homelab')
      cy.get('.home_network').get('h2').contains('dashboard')
      cy.get('.home_network').get('h2').contains('neofetch')
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
      cy.get('.cats').get('button')
      cy.get('.cats').get('img')
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
