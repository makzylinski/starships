export const cardSelectors = {
    cardContainer: () => cy.get('[data-test-id="card-container"]'),
    cardName: () => cy.get('[data-test-id="card-name"]'),
    cardList: () => cy.get('[data-test-id="card-list"]')
} as const;