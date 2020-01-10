import * as actions from '../actions';


describe('actions', () => {
    it('should have a type of ADD_GAMES', () => {
        // Setup
        const games = [];
        const expectedAction = {
            type: 'ADD_GAMES',
            games: []
        };

        // Execution
        const result = actions.addGames(games);

        // Expectation
        expect(result).toEqual(expectedAction);
    });
})