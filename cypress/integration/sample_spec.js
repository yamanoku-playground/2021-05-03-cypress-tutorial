describe("My First Test", () => {
  it('Visits yamanoku.net/vue-a11y', () => {
    cy.visit('https://yamanoku.net')

    cy.contains('Article about accessibility with Vue.js').click()

    cy.url().should('include', '/en/vue-a11y')

    cy.contains('日本語ページ').click()

    cy.url().should('include', '/vue-a11y')

  });
});
