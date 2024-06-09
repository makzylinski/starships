export const entitySwitcherSelectors = {
    entitySwitcherContainer: () => cy.get('[data-test-id="entity-switcher-container"]'),
    entitySwitcherPeople: () => cy.get('[data-test-id="entity-switcher-people"]'),
    entitySwitcherStarships: () => cy.get('[data-test-id="entity-switcher-starships"]')
} as const;