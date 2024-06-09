export const mainGameSelectors = {
    mainGamePlayAgainButton: () => cy.get('[data-test-id="play-again-button"]'),
    mainGameWinner: () => cy.get('[data-test-id="game-winner"]'),
    mainGamePlayerOne: () => cy.get('[data-test-id="player-one-score"]'),
    mainGamePlayerTwo: () => cy.get('[data-test-id="player-two-score"]')
} as const;