import { entitySwitcherSelectors } from "cypress/selectors/entity-switcher.selectors";

before(() => {
    cy.visit('http://localhost:4200');
})

describe('Entity Switcher Tests', () => {
    it('check elements visibilty', () => {
        entitySwitcherSelectors.entitySwitcherContainer().should('be.visible');
        entitySwitcherSelectors.entitySwitcherPeople().should('be.visible');
        entitySwitcherSelectors.entitySwitcherStarships().should('be.visible');
    })
})