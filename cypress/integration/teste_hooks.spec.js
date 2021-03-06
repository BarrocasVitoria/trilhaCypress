/// <reference types = "cypress" />

context('Validar menus', () => {
  beforeEach(() => {
    //toda vez entrar por essa pagina no inicio
    cy.visit('http://lojaebac.ebaconline.art.br')
  })

  afterEach(() => {
    //print quando nao falha os testes
    cy.screenshot()
  })

  it('clicando no link comprar deve direcionar para a pagina de compra', () => {
    //cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
    cy.get('@comprarMenuLink')
      .contains('Comprar')
      .and('have.attr', 'href')
      .and('include', 'shop')
    cy.get('@comprarMenuLink').click()
    cy.get('.page-title').should('contain', 'Produtos')
    cy.url().should('contain', '/shop')
  })

  it('clicando no link conta deve direcionar para a pagina de login/cadastro', () => {
    // cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('.icon-user-unfollow').click()
    cy.url().should('contain', '/my-account-2')
  })
})
