import { favoriteGames } from '../reducers/favoriteGames';

describe('favoriteGames', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = favoriteGames(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });

  it('should return state with a favorite games', () => {
    // Setup
    const mockGames = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'FAVORITE_GAMES',
      games: mockGames,
    };

    const newState = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}, undefined
  
  ];

    const result = favoriteGames(initialState, action);

    expect(result).toEqual(newState);
  });

  it('should return state with removed games', () => {
    const mockGames = [{team:'barcelona vs ajax'}, {team: 'liverpool vs man'}
  
    ];

    const initialState = mockGames;
    const action = {
      type: 'REMOVE_GAMES',
      games: mockGames,
    };

    const newState = [
      {
        team:'barcelona vs ajax'
      },
    ];

    const result = favoriteGames(initialState, action);

    expect(result).toEqual(newState);
  });
});