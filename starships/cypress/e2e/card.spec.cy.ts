import { cardSelectors } from "cypress/selectors/card.selectors";

before(() => {
    cy.visit('http://localhost:4200');
})

describe('Card Tests', () => {
    it('features', () => {
        cy.log('check visibility');
        cardSelectors.cardContainer().should('be.visible');
        cardSelectors.cardName().should('be.visible');
        cardSelectors.cardList().should('be.visible');
    
        cy.log('check the name');
        cardSelectors.cardName().eq(0).should('contain.text', 'Player 1');
        cardSelectors.cardName().eq(1).should('contain.text', 'Player 2');
    })
})