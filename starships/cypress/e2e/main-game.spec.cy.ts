import { mainGameSelectors } from "cypress/selectors/main-game.selectors";

before(() => {
    cy.visit('http://localhost:4200');
})

describe('Main game window test', () => {
    it('Should test elements visibility', () => {
        mainGameSelectors.mainGamePlayAgainButton().should('be.visible');
        mainGameSelectors.mainGameWinner().should('be.visible');
        mainGameSelectors.mainGamePlayerOne().should('be.visible');
        mainGameSelectors.mainGamePlayerTwo().should('be.visible');
    })
})