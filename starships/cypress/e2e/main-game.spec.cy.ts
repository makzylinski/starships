import { mainGameSelectors } from "cypress/selectors/main-game.selectors";

beforeEach(() => {
    cy.visit('http://localhost:4200');
});

after(() => {
    cy.clearLocalStorage();
})

describe('Main game window test', () => {
    it('Features', () => {
        cy.log('check visibility');
        mainGameSelectors.mainGamePlayAgainButton().should('be.visible');
        mainGameSelectors.mainGameWinner().should('be.visible');
        mainGameSelectors.mainGamePlayerOne().should('be.visible');
        mainGameSelectors.mainGamePlayerTwo().should('be.visible');
   
        cy.log('check winning')
        cy.window().its('localStorage').then(localStorage => {
            const player1 = Number(localStorage.getItem('Player 1')) ?? 0;
            const player2 = Number(localStorage.getItem('Player 2')) ?? 0;

            if (player1 > player2) {
                mainGameSelectors.mainGameWinner().invoke('text').then((text) => {
                    const cleanText = text.trim();
                    expect(cleanText).to.equal('The winner is... Player 1');
                    mainGameSelectors.mainGamePlayerOne().should('contain.text', 'Player One: 1');
                });
            } else if (player2 > player1) {
                mainGameSelectors.mainGameWinner().invoke('text').then((text) => {
                    const cleanText = text.trim();
                    expect(cleanText).to.equal('The winner is... Player 2');
                    mainGameSelectors.mainGamePlayerOne().should('contain.text', 'Player Two: 1');
                });
            } else {
                
                mainGameSelectors.mainGameWinner().invoke('text').then((text) => {
                    const cleanText = text.trim();
                    expect(cleanText).to.equal('The winner is... Draw or no data');
                });
            }
        });

        cy.log('play again');

        cy.intercept('GET', 'https://www.swapi.tech/api/people/**').as('apiRequest');
        mainGameSelectors.mainGamePlayAgainButton().click();
        
        cy.wait('@apiRequest').should(({ request }) => {
        expect(request.url).to.include('https://www.swapi.tech/api/people/');
        });
    });
});