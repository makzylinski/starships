import { mainGameSelectors } from "cypress/selectors/main-game.selectors";

before(() => {
    cy.visit('http://localhost:4200').wait(3000);
})

describe('Main game window test', () => {
    it('Should test elements visibility', () => {
        mainGameSelectors.mainGamePlayAgainButton().should('be.visible');
    })
})