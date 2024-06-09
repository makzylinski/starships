import { entitySwitcherSelectors } from "cypress/selectors/entity-switcher.selectors";

before(() => {
    cy.visit('http://localhost:4200');
})

describe('Entity Switcher Tests', () => {
    it('features', () => {
        cy.log('check visibility');
        entitySwitcherSelectors.entitySwitcherContainer().should('be.visible');
        entitySwitcherSelectors.entitySwitcherPeople().should('be.visible');
        entitySwitcherSelectors.entitySwitcherStarships().should('be.visible');

        cy.log('check type switch');
        cy.intercept('GET', 'https://www.swapi.tech/api/people/**').as('peopleRequest');
        entitySwitcherSelectors.entitySwitcherPeople().click()
        
        cy.wait('@peopleRequest').should(({ request }) => {
        expect(request.url).to.include('https://www.swapi.tech/api/people/');
        });

        cy.intercept('GET', 'https://www.swapi.tech/api/starships/**').as('starshipsRequest');
        entitySwitcherSelectors.entitySwitcherStarships().click()
        
        cy.wait('@starshipsRequest').should(({ request }) => {
        expect(request.url).to.include('https://www.swapi.tech/api/starships/');
        });
    })
})