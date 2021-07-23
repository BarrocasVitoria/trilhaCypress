/// <reference types = "cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br')
  })
  it('com o usuario cadastrado redirecionar para a pagina de Minha Conta', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('eshi')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
  })
})
