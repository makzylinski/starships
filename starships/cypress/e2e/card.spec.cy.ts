import { cardSelectors } from "cypress/selectors/card.selectors";

before(() => {
    cy.visit('http://localhost:4200');
})

describe('Card Tests', () => {
    it('should test elements visibility', () => {
        cardSelectors.cardContainer().should('be.visible');
        cardSelectors.cardName().should('be.visible');
        cardSelectors.cardList().should('be.visible');
    })
})